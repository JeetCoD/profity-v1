import { createPortal } from "react-dom";

function Modal({ children, onClick }) {
  return createPortal(
    <div
      onClick={onClick}
      className=" fixed top-0 left-0 w-full h-full bg-white bg-opacity-10 flex justify-center items-center z-50 backdrop-blur-sm pointer-events-auto"
    >
      {children}
    </div>,
    document.body
  );
}

export default Modal;
