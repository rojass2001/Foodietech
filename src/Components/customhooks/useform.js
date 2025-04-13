import { useState } from 'react'

export default function useForm(initialstate) {
    const [values, setvalues] = useState(initialstate)
    return [values,
        (event) => {
            setvalues({ ...values,[event.target.name]:event.target.value})
}]
}


