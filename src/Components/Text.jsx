import { memo } from "react";
/* eslint-disable react/prop-types */
// The Text component renders a <p> element with dynamic className and children.
function Text({ className, children }) {
  return (
    // Render a paragraph element with the provided className and children
    <p className={className}>
      {children}
    </p>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Text);
