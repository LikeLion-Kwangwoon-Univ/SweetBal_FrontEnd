import { useRef } from 'react';
import {
  AcceptButton,
  ModalContainer,
  ModalTItle,
  ModalText,
  ModalWindow,
} from './modalStyle';

interface modalPropsType {
  isModalOpen: boolean;
  closeModal(): void;
}

function RegisterModal(props: modalPropsType) {
  const modalBackground = useRef(null);
  const handleModalBackground = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === modalBackground.current) {
      props.closeModal();
    }
  };
  return (
    <>
      {props.isModalOpen ? (
        <ModalContainer onClick={handleModalBackground} ref={modalBackground}>
          <ModalWindow>
            <ModalTItle>밸런스 등록 성공</ModalTItle>
            <ModalText>직접 만든 밸런스를 하러 가볼까요?</ModalText>
            <AcceptButton onClick={props.closeModal}>확인</AcceptButton>
          </ModalWindow>
        </ModalContainer>
      ) : null}
    </>
  );
}

export default RegisterModal;
