/* eslint-disable react/prop-types */

function Box({className,children,onClick}) {
  return (
    <>
    <div className={className} onClick={onClick}>
      {children}
      </div>
    </>
  )
}

export default Box
