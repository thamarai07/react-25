import { useEffect } from "react";

export default function useOutSideClick(ref: any, handler: (event: any) => void) {
  useEffect(() => {
    function listener(event: any) {
      // Check if the click is outside the referenced element
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // If it's outside, call the handler
      handler(event);
    }

    // Attach event listeners
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Clean up the event listeners on unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Dependencies
}
