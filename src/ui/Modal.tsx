import {
  cloneElement,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

import useOutsideClick from "../hooks/useOutsideClick";

export interface ModalContextType {
  open: (open: string) => void;
  openName: string;
  close: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
interface ModalPropType {
  children: ReactNode;
}

const Modal = ({ children }: ModalPropType) => {
  const [openName, setOpenName] = useState("");
  const close = () => {
    document.querySelector("body")!.style.overflow = "auto";

    setOpenName("");
  };
  const open = (open: string) => {
    document.querySelector("body")!.style.overflow = "hidden";

    setOpenName(open);
  };

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
interface WindowPropType {
  children: ReactNode;
  name: string;
}

const Window = ({ children, name }: WindowPropType) => {
  const { openName, close: onClose } = useContext(
    ModalContext
  ) as ModalContextType;
  const { ref } = useOutsideClick<HTMLDivElement>(onClose);

  if (name !== openName) return null;

  return createPortal(
    <div ref={ref}>
      {cloneElement(children as JSX.Element, { onClose: onClose })}
    </div>,
    document.body
  );
};

interface OpenPropType {
  children: ReactNode;
  opens: string;
}

const Open = ({ children, opens: openWindowName }: OpenPropType) => {
  const { open } = useContext(ModalContext) as ModalContextType;
  return cloneElement(children as JSX.Element, {
    onClick: () => {
      open(openWindowName);
    },
  });
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
