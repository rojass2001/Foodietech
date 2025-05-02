import { useEffect, useState } from 'react';

const useKeyboardStatus = () => {
  // State to track if the keyboard is open or closed
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Event handler for focusin event, triggered when an input field or textarea is focused
    const handleFocusIn = (e) => {
      // Check if the focused element is an input or textarea or has contentEditable attribute set to 'true'
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.contentEditable === 'true') {
        setIsKeyboardOpen(true);  // Keyboard is open when one of these elements is focused
      }
    };

    // Event handler for focusout event, triggered when the focus leaves the input field
    const handleFocusOut = () => {
      setIsKeyboardOpen(false);  // Keyboard is closed when focus leaves the input field
    };

    // Adding event listeners for focusin and focusout to detect when the keyboard opens or closes
    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);

    // Cleanup function to remove event listeners when the component is unmounted
    return () => {
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  // Return an object containing the status of the keyboard
  return { isKeyboardOpen };
};

export default useKeyboardStatus;
