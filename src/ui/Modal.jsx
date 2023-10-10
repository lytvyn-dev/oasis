import styled from "styled-components";

import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
  z-index: 9999;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;

    color: var(--color-grey-500);
  }
`;

const ModalContex = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return <ModalContex.Provider value={{ openName, close, open }}>{children}</ModalContex.Provider>;
};

const Open = ({ children, opens: openWindowName }) => {
  const { open } = useContext(ModalContex);

  return cloneElement(children, { onClick: () => open(openWindowName) });
};

const Window = ({ children, name }) => {
  const { close, openName } = useContext(ModalContex);
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (name !== openName) return;

  return createPortal(
    <Overlay>
      <StyledModal ref={modalRef}>
        {cloneElement(children, { onClose: () => close() })}
        <CloseButton onClick={close}>
          <HiXMark />
        </CloseButton>
      </StyledModal>
    </Overlay>,
    document.getElementById("modal")
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
