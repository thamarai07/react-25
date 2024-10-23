import useFetch from "@/src/custom/usefetch";
import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export default function ScrollTopBottom() {
  const { Data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const handleTopScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (error) {
    <div>Error Accour Please Check </div>;
  }

  if (pending) {
    <div>Please Wight Magic will Happen </div>;
  }

  const {bottomref} : any = useContext(GlobalContext);

  return (
    <>
      <div className="scoller__container" ref={bottomref}>
        <div>
          <button className="bg-slate-600 text-white m-auto block pt-2 pb-2 pr-6 pl-6 rounded-md">
            Scroll to Bottom
          </button>
        </div>
        <div>
          {Data &&
            Data?.products.map((values: any) => (
              <li className="text-center p-3">{values.title}</li>
            ))}
        </div>
        <div>
          <button
            onClick={handleTopScroll}
            className="bg-slate-600 text-white m-auto block pt-2 pb-2 pr-6 pl-6 rounded-md"
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </>
  );
}
