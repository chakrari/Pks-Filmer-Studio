import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const modal = ({onClose}) => {
  
  const modalRef = useRef();

  const closeModal = (e) => {
if(modalRef.current === e.target){
  onClose();
}
  }

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex items-center justify-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose}><IoMdClose size={30} className="place-self-end"/></button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 gap-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold text-center">Success! Your form has been submitted</h1>
            <p className="text-2xl font-bold max-w-md text-center"> Thank you for taking the time to reach out to us. We'll be in touch shortly!</p>
        </div>
      </div>
    </div>
  );
};

export default modal;
