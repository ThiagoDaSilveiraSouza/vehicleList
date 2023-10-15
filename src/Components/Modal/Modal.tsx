import { ReactNode, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Cross1Icon } from "@radix-ui/react-icons";

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalCard = styled.div`
  position: absolute;
  width: 280px;
  max-width: 90vw;
  height: 300px;
  max-height: 100vh;
  box-shadow: 0 0 3px 0 gray;
  background: white;
`;

interface ModalPros {
  children?: ReactNode;
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const Modal = ({ children }: ModalPros) => {
  return (
    <ModalContainer>
      <ModalBackground />
      <ModalCard>
        <Cross1Icon
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
          }}
        />
        {children}
      </ModalCard>
    </ModalContainer>
  );
};
