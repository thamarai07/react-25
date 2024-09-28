"use client";
import dummy from "../src/lib/dummydata"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "../src/scss/style.scss";

export default function Home() {
  const [clickedId, setclickedId] = useState<number | null>(null);
  const [enableMultiSection, setenableMultiSection] = useState<
    boolean | number
  >();
  const [Multiple, setMultiple] = useState<number[]>([]);

  const handleSingleQuestion = (data: number) => {
    setclickedId(data === clickedId ? null : data);
  };

  const handleMultiSelection = (data: number) => {
    const cypmultiple = [...Multiple];
    const findIndexofMultiple = cypmultiple.indexOf(data);
    console.log(findIndexofMultiple);
    if (findIndexofMultiple === -1) cypmultiple.push(data);
    else cypmultiple.splice(findIndexofMultiple, 1);

    setMultiple(cypmultiple);
  };

  return (
    <>
      {/* single section accordion */}
      <div>
        <p className="accordion__title">Accordion</p>
        <div className="wrapper">
          <button className={`accordion__btn`} onClick={() => setenableMultiSection(!enableMultiSection)}>
            Enable Multi Selection
          </button>
          <div className="accordion">
            {dummy && dummy.length > 0 ? (
              dummy.map((values) => (
                <div className="accordion__item" key={values.id}>
                  <h1
                    className={`accordion__item--question ${
                      clickedId === values.id ||
                      Multiple.indexOf(values.id) !== -1
                        ? "active"
                        : ""
                    }`}
                    onClick={
                      enableMultiSection
                        ? () => handleMultiSelection(values.id)
                        : () => handleSingleQuestion(values.id)
                    }
                  >
                    {values.question}{" "}
                    <span>
                      <IoIosArrowDown
                        className={`accordion__item--arrow ${
                          clickedId === values.id ||
                          Multiple.indexOf(values.id) !== -1
                            ? "active"
                            : ""
                        }`}
                        width={40}
                        height={40}
                      />
                    </span>
                  </h1>
                  {enableMultiSection
                    ? Multiple.indexOf(values.id) !== -1 && (
                        <p
                          className={`accordion__item--ans ${
                            clickedId === values.id ||
                            Multiple.indexOf(values.id) !== -1
                              ? "active"
                              : ""
                          }`}
                        >
                          {values.ans}
                        </p>
                      )
                    : clickedId == values.id && (
                        <p
                          className={`accordion__item--ans ${
                            clickedId === values.id || Multiple.indexOf(values.id) !== -1 ? "active" : ""
                          }`}
                        >
                          {values.ans}
                        </p>
                      )}
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
