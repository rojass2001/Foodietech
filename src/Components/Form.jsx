/* eslint-disable react/prop-types */
function Form({className,children,onsubmit}) {
  return (
    <form className={className} onSubmit={onsubmit}>
      {children}
    </form>
  )
}

export default Form
