"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Image from "next/image";
interface imageInterface {
  url: string;
  limit: number;
  page: number;
}

interface Interimage {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
[];

function SliderImage({ url, limit, page }: imageInterface) {
  const [Images, setImage] = useState<Interimage[]>([]);
  const [ErrMsg, setErrMsg] = useState<string | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);
  const [CurrentImage,setCurrentImage] = useState<number>(0)
  async function FetchSliderImage(url: string) {
    try {
      setLoading(true);
      setErrMsg(null); // Reset error state before fetching
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (response.ok) {
        setImage(data);
      } else {
        setErrMsg("Failed to fetch images");
      }
    } catch (e: any) {
      setErrMsg(e.message || "An error occurred");
    } finally {
      setLoading(false); // Ensure loading is set to false after completion
    }
  }

  useEffect(() => {
    if (url !== "") {
      FetchSliderImage(url);
    }
  }, [url, limit, page]); // Re-fetch when url, limit, or page changes

  if (Loading) {
    return <div>Data is Loading, Please wait...</div>;
  }

  if (ErrMsg) {
    return <div>Error occurred - {ErrMsg}</div>;
  }

  function handlePrevious(){
    setCurrentImage(CurrentImage === 0 ? Images.length - 1 : CurrentImage - 1)
  }
  function handleNext(){
    setCurrentImage(CurrentImage === Images.length - 1 ? 0 : CurrentImage + 1)
  }

  return (
    <>
      <div className="imageslider">
        <BsArrowLeftCircle onClick={handlePrevious} className="arrow arrow-left" />

        {Images.length > 0 && Images
          ? Images.map((values,index) => (
              <img
                key={values.id}
                src={values.download_url}
                alt={values.author}
                className={CurrentImage === index ? "imageslider__currentimg" : "imageslider__currentimg imageslider__currentimg--hide"}
              />
            ))
          : Loading
          ? "Loading"
          : ErrMsg
          ? `Error Occurred ${ErrMsg}`
          : "No Data"}
        <BsArrowRightCircle onClick={handleNext} className="arrow arrow-right" />

        <span className="circle__indicator">
          {Images.map((_, index) => (
            <button key={index} 
            className={CurrentImage === index ? "current__indicator" : "current__indicator current__indicator--inactive"} 
              onClick={() => setCurrentImage(index)}
              ></button>
          ))}
        </span>
      </div>
    </>
  );
}

export default SliderImage;
