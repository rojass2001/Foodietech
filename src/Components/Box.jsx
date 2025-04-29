import { memo } from "react"

// eslint-disable-next-line react/prop-types
function Box({className,children,onClick,}) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

export default memo(Box)
