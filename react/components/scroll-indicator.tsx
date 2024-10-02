"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/store/store";
import { RootState, AppDispatch } from "@/store/store";

interface Item {
  title: string;
}

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleProgressBar = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Avoid division by zero
    const percentage = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgressBar);
    
    return () => {
      window.removeEventListener("scroll", handleProgressBar); // Corrected cleanup
    };
  }, []);

  console.log(scrollPercentage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="progress_bar__top">
        <p>Custom Tag Indicator</p>
        <div className="scrollprograss__tracking__container">
          <div
            className="currect__progress__bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {items && items.length > 0
        ? items.map((item: Item, index: number) => (
            <p key={index} className="text-center p-4">{item.title}</p>
          ))
        : null}
    </div>
  );
}
