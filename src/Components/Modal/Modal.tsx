import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Modal = () => {
  return <ModalContainer></ModalContainer>;
};
