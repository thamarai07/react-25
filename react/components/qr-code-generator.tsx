"use client";
import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator() {
  const [Qr, setQr] = useState("");
  const [input, setinput] = useState("");

  function handleQrGenerator() {
    setQr(input);
  }

  return (
    <>
      <div className="qrgenerator__wrap">
        <h1>QR Code Generator</h1>
        <div className="qr__inputwrap">
          <input
            type="text"
            name="qr__generator"
            className=""
            placeholder="Please Enter You value"
            onChange={(e) => setinput(e.target.value)}
          />
          <button disabled={input && input.trim() != "" ? false :true } onClick={handleQrGenerator}>
            Generate
          </button>
        </div>
        <div className="qr__container">
            {input.trim() == "" &&  <span className="text-center inline-block w-full pt-1 pb-10 text-red-400 text-[12px] uppercase"> Please file the input</span>  }
          <QRCode id="qr__value" value={Qr} size={400} bgColor="#fff" />
        </div>
      </div>
    </>
  );
}
