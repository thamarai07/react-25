
import React, { useState,useRef } from 'react';

export default function UseOutSideClick() {
    const [ShowContent,setShowContent] = useState(false);

    const ref = useRef();
    

    const handleshowcontent = (data : boolean) =>{
        setShowContent(data)
    }   
    return (
    <>
            {ShowContent ? <div>
                <h1 className='text-[30px] font-semibold'>This is Random content</h1>
                <p className='text-[20px] font-semibold'>for Hide This content please click outside of the content, if you click inside it won't hide thank you </p>
            </div> : <button className='m-auto bg-purple-500 block mt-10 p-4 rounded text-white' onClick={()=>handleshowcontent(true)}>Show content</button>}
    </>
  );
}
