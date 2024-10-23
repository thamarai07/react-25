import { createContext, useRef} from "react"

export const GlobalContext = createContext(null);

export default function GlobalContextAl ({children} : any){

    const bottomref : any = useRef(null);

    const handlebottomScroll = ()=>{
      let postion = bottomref.current.getBoundingClientRect().top;

      window.scrollTo({
        top: postion,
        behavior : "smooth"
      })
    }
  
    return(
        <GlobalContext.Provider value={{bottomref,handlebottomScroll}}>{children}</GlobalContext.Provider>
    )
}