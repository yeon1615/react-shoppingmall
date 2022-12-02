import * as S from './ProductInfo-style';

export default function ProductInfo(productData) {
  return (
    <S.ProductInfo>
      <div>
        <S.ProductName>{productData.productName}</S.ProductName>
        <S.ProductPrice>
          {productData.price.toLocaleString()}
          <S.Won>원</S.Won>
        </S.ProductPrice>
      </div>
    </S.ProductInfo>
  );
}
