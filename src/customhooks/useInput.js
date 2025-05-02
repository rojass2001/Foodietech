import { useState } from 'react'

export default function useInput(initialState) {
  // Initialize state to hold form values
  const [values, setValues] = useState(initialState)

  // Handle input changes and update the corresponding field
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  // Return current values and change handler
  return [values, handleChange]
}
