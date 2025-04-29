/* eslint-disable react/prop-types */
import { memo } from "react"

function Button({className,onClick,children,type,style}) {
  return (
    <button type={type} className={className} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default memo (Button)
