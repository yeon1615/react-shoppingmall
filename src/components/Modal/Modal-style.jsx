import styled from 'styled-components';
import CloseIcon from '../../assets/images/icon-delete.svg';

export const ModalBackground = styled.div`
  z-index: 50;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalSection = styled.section`
  position: fixed;
  width: 990px;
  height: 90vh;
  top: 50px;
  padding: 60px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
`;

export const ModalRow = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const ProductImg = styled.img`
  width: 400px;
  object-fit: cover;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

export const Shipping = styled.p`
  margin-bottom: 10px;
  color: #828282;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 6px;
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: url(${CloseIcon}) no-repeat center / cover;
`;
