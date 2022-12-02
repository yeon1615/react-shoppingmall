import styled from 'styled-components';

export const BuyButton = styled.button`
  width: 308px;
  height: 60px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: white;
  background-color: ${(props) =>
    props.stockCount !== 0 ? 'var(--main-color)' : '#BDBDBD'};
`;
