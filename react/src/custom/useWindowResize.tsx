import { useLayoutEffect, useState } from "react";
function UseWidthandHeight() {
  const [WidthAndHight, setWidthAndHight] = useState({
    width: 0,
    hight: 0,
  });

  const handlewidthandhight = () => {
    setWidthAndHight({
      width: window.innerWidth,
      hight: window.innerHeight,
    });
  };
  useLayoutEffect(() => {
    handlewidthandhight();
    window.addEventListener("resize", handlewidthandhight);

    return () => {
      window.removeEventListener("resize", handlewidthandhight);
    };
  }, []);

  return WidthAndHight;
}

export default function WindowsWidthAndHeight() {
  const WidthAndHight = UseWidthandHeight();
  const { hight, width } = WidthAndHight;
  return (
    <>
      <div className="mt-32 mb-32">
       <p className=" text-9xl text-center font-semibold mb-10"> This is width and height of the Window Showcase:</p>
        <div className="text-center ">Width : {width}</div>
        <div className="text-center">hight : {hight}</div>
      </div>
     
    </>
  );
}
