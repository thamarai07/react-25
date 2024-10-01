"use client";

import React, { useState } from "react";
import { BiStar } from "react-icons/bi";
function starRating({ noOfStars = 5 }) {
  const [Hover, setHover] = useState(0);
  const [Clicked, setClicked] = useState(0);

  function handleonclick(currentIndex: number) {
    setClicked(currentIndex);
  }

  function handleMouseEnter(currentIndex: number) {
    setHover(currentIndex);
  }

  function handleMouseLeave() {
    setHover(Clicked);
  }

  return (
    <>
    <h1 className="text-center text-[30px] font-semibold mt-10 mb-4"> Rating is {Hover && Hover || Clicked && Clicked}</h1>
    <div className="starrating__wrap mb-10">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <BiStar
            key={index}
            className={`star ${ index <= (Hover || Clicked) ? "active" : "inactive"}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleonclick(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
      </div>
    </>
  );
}

export default starRating;
