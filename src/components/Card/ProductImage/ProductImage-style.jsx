import styled from 'styled-components';

export const ProductImgLayout = styled.div`
  position: relative;
`;
export const ProductImg = styled.img`
  width: 100%;
  filter: ${(props) => (props.stockCount === 0 ? 'brightness(50%)' : 'none')};
`;

export const SoldoutMark = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: white;
  background: #333333;
`;
