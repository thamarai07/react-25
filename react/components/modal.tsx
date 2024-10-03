import React, { useState } from "react";

interface ModalInterface {
  id: number;
  header: string;
  body: string;
  footer: string;
}

export default function Model() {
  const [ShowModalPopUp, setShowModalPopUp] = useState(false);
  return (
    <>
      <button onClick={() => setShowModalPopUp(!ShowModalPopUp)} className="modal__btn">
        Open Modal
      </button>
      {ShowModalPopUp && (
        <ShowModal id={1} header="Header" body="Body" footer="Footer" />
      )}
    </>
  );
}

const ShowModal = ({ id, header, body, footer }: ModalInterface) => {
  return (
    <>
      <div id={id || "Modal"} className="modal__wrap">
        <div className="modal__container">
          <div className="modal__header">
            <span className="modal__header--cls"></span>
            <h2>{header}</h2>
          </div>
          <div className="modal__body">{body}</div>
          <div className="modal__footer">{footer}</div>
        </div>
      </div>
    </>
  );
};
