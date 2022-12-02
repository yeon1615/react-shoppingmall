import * as S from './ProductPrice-style';

export default function ProductPrice({ price }) {
  return (
    <S.ProductPrice>
      {price.toLocaleString()}
      <span>원</span>
    </S.ProductPrice>
  );
}
