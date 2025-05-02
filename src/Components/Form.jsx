/* eslint-disable react/prop-types */

// Functional component for rendering a form
function Form({ className, children, onsubmit }) {
  return (
    // Form element with dynamic className and submit handler
    <form className={className} onSubmit={onsubmit}>
      {/* Render children inside the form */}
      {children}
    </form>
  );
}

// Exporting the Form component to be used in other parts of the application
export default Form;
