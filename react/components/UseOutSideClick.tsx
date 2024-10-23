import useOutSideClick from '@/src/custom/useOutSideClick';
import React, { useState, useRef } from 'react';

export default function UseOutSideClick() {
  const [ShowContent, setShowContent] = useState(false);

  const ref = useRef(null);

  // Hook to hide content when clicking outside the referenced div
  useOutSideClick(ref, () => setShowContent(false));

  const handleShowContent = (data: boolean) => {
    setShowContent(data);
  };

  return (
    <>
      {ShowContent ? (
        <div ref={ref} className='mt-32 mb-32'>
          <h1 className='text-[30px] font-semibold text-center'>This is Random content</h1>
          <p className='text-[20px] font-semibold text-center'>
            To hide this content, please click outside of the content. If you click inside, it won’t hide. Thank you!
          </p>
        </div>
      ) : (
        <button
          className='m-auto bg-purple-500 block mt-10 p-4 rounded text-white'
          onClick={() => handleShowContent(true)}
        >
          Show content
        </button>
      )}
    </>
  );
}
