import { useEffect } from "react";

export default function useOutSideClick({ref, handler} : any ) {
  useEffect(() => {
    function listner(event: any) {
      if (!ref.current || ref.current.contains(event.target)) {
      }
      handler(event)
    }

    document.addEventListener("mousedown",listner);
    document.addEventListener("touchstart ",listner);

    return () =>{
         document.addEventListener("mousedown",listner);
         document.addEventListener("touchstart",listner);   
    }
  }, [handler, ref]);
}
