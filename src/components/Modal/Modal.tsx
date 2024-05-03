import React, { useRef } from "react";
// import { XMarkIcon } from "@heroicons/react/24/solid";

interface ModalProps {
  id: string;
  content: string;
  open: boolean;
  onClose: (value: boolean) => void;
  className?: string;
  closeButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  id,
  content,
  open,
  onClose,
  closeButton = true,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose(false);
  };

  return (
    <>
      {open && (
        <>
          <div
            id={`${id}-background`}
            className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75"
            data-testid={`${id}-background`}
          ></div>
          <div
            id={`${id}-content`}
            ref={ref}
            className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded bg-white shadow-md"
            {...props}
            role="dialog"
            aria-modal="true"
            data-testid={`${id}-content`}
          >
            {closeButton && (
              <button
                id={`${id}-close`}
                className="absolute top-0 right-0 m-2"
                onClick={handleClose}
                data-testid={`${id}-close`}
              >
                Close
              </button>
            )}
            {content}
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
