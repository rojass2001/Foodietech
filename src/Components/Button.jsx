/* eslint-disable react/prop-types */

function Button({className,onClick,children,type,style}) {
  return (
    <button type={type} className={className} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
