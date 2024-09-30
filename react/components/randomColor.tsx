"use client";

import React, { useEffect, useState } from "react";

function RandomColor() {
  const [TypeofColor, setTypeofColor] = useState<string>("hex");
  const [Color, setColor] = useState("#000000");

  function createRandomUtils(length: any) {
    return Math.floor(Math.random() * length);
  }


  function handleCreateRandomHexNumber() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (var i = 0; i < 6; i++) {
      hexColor += hex[createRandomUtils(hex.length)];
    }
    setColor(hexColor);
    setTypeofColor("hex");
  }

  function handleCreateRandomRGBNumber() {
    const R = createRandomUtils(256);
    const G = createRandomUtils(256);
    const B = createRandomUtils(256);
    setColor(`rgb(${R}, ${G}, ${B})`);
    setTypeofColor("rgb");
  }

  useEffect(() => {
    if (TypeofColor === "rgb") handleCreateRandomRGBNumber();
    else handleCreateRandomHexNumber();
  }, [TypeofColor]);

  return (
    <>
      <div
        className="random__colorwrap"
        style={{
          height: "100vh",
          background: Color,
          transition: "background 0.1s ease-in-out", // Smooth transition added
        }}
      >
        <div className="random__color--btncontainer">
          <button onClick={() => handleCreateRandomHexNumber()}>
            Create HEX Color
          </button>
          <button onClick={() => handleCreateRandomRGBNumber()}>
            Create RGB Color
          </button>
          <button
            onClick={
              TypeofColor === "hex"
                ? () => handleCreateRandomHexNumber()
                : () => handleCreateRandomRGBNumber()
            }
          >
            Generate Random Color
          </button>
        </div>
        <p className="text-center mt-10 font-semibold text-4xl ">
          {TypeofColor === "hex" ? "HEX Color " + Color : "RGB Color " + Color}
        </p>
      </div>
    </>
  );
}

export default RandomColor;
