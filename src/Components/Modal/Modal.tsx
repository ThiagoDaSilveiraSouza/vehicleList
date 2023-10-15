import { ReactNode, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Cross1Icon } from "@radix-ui/react-icons";

interface modalStylesProps {
  isopen: string;
}

const ModalContainer = styled.div<modalStylesProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  visibility: ${({ isopen }) => (isopen === "true" ? "visble" : "hidden")};
  animation-delay: 0.3s;
`;

const ModalBackground = styled.div<modalStylesProps>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ isopen }) => (isopen === "true" ? "1" : "0")};
  transition: 0.3s;
`;

const ModalCard = styled.div<modalStylesProps>`
  position: absolute;
  width: 280px;
  max-width: 90vw;
  height: 300px;
  max-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 3px 0 gray;
  background: white;
  opacity: ${({ isopen }) => (isopen === "true" ? "1" : "0")};
  transform: ${({ isopen }) =>
    isopen === "true" ? "none" : "translateY(-50%)"};
  transition: 0.3s;
`;

interface ModalPros {
  children?: ReactNode;
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const Modal = ({ children, useModal }: ModalPros) => {
  const [modalIsOpen, setModalIsOpen] = useModal;

  const closeModalHandlerClick = () => {
    setModalIsOpen(false);
  };
  return (
    <ModalContainer isopen={modalIsOpen.toString()}>
      <ModalBackground
        onClick={closeModalHandlerClick}
        isopen={modalIsOpen.toString()}
      />
      <ModalCard isopen={modalIsOpen.toString()}>
        <Cross1Icon
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
          }}
          onClick={closeModalHandlerClick}
        />
        {children}
      </ModalCard>
    </ModalContainer>
  );
};
