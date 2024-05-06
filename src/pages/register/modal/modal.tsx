import {
  AcceptButton,
  ModalContainer,
  ModalTItle,
  ModalText,
  ModalWindow,
} from './modalStyle';

function RegisterModal() {
  return (
    <ModalContainer>
      <ModalWindow>
        <ModalTItle>밸런스 등록 성공</ModalTItle>
        <ModalText>직접 만든 밸런스를 하러 가볼까요?</ModalText>
        <AcceptButton>확인</AcceptButton>
      </ModalWindow>
    </ModalContainer>
  );
}

export default RegisterModal;
