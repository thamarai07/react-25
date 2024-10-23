import useFetch from "@/src/custom/usefetch";
import React, { useEffect, useState } from "react";

export default function UseFetch() {
  const [Arr, setArr] = useState([]);

  const { Data, error, pending } = useFetch(
    "https://dummyjson.com/products?asdhfbads",
    {}
  );

  const arr = ["Kiwi", "Kiwi", "Kiwi", "thamarai", "Kiwi", "thamarai"];


  useEffect(() => {
    const tempArr: ((prevState: never[]) => never[]) | string[] = [];
    arr.map((values, index) => {
      if (tempArr.indexOf(arr[index]) === -1) {
        tempArr.push(arr[index]);
      }
    });
    setArr(tempArr);
  }, []);

  console.log(Arr)

  if (pending) {
    return (
      <>
        <p className="text-center text-[36px]">Loading Please Wait</p>
      </>
    );
  }
  if (error) {
    return (
      <>
        <p className="text-center text-[36px]">{error}</p>
      </>
    );
  }
  return (
    <>
      <p className="text-center text-[32px] font-semibold my-10">
        useFetch Hook
      </p>
      <ul className="m-auto">
        {Data &&
          Data?.products.map((values) => (
            <li className="text-center p-3">{values.title}</li>
          ))}
      </ul>
    </>
  );
}
