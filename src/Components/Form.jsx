/* eslint-disable react/prop-types */
function Form({className,children}) {
  return (
    <form className={className}>
      {children}
    </form>
  )
}

export default Form
