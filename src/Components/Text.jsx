import { memo } from "react"

// eslint-disable-next-line react/prop-types
function Text({className,children}) {
  return (
    <p className={className}>
      {children}
    </p>
  )
}

export default memo(Text)
