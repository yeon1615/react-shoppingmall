import styled from 'styled-components';
import PlusIcon from '../../../assets/images/plus-icon.svg';
import MinusIcon from '../../../assets/images/minus-icon.svg';

export const CounterButtonLayout = styled.div`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0 10px;
`;

export const CounterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 122px;
  height: 40px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export const MinusButton = styled.button`
  width: 33%;
  height: 100%;
  border-right: 1px solid #bdbdbd;
  background: url(${MinusIcon}) no-repeat center;
`;

export const PlusButton = styled.button`
  width: 33%;
  height: 100%;
  border-left: 1px solid #bdbdbd;
  background: url(${PlusIcon}) no-repeat center;
`;

export const Counter = styled.p`
  width: 33%;
`;
