import * as S from './ProductImage-style';

export default function ProductImage({
  productName,
  thumbnailImg,
  stockCount,
}) {
  return (
    <S.ProductImgLayout>
      <S.ProductImg
        src={'https://test.api.weniv.co.kr/' + thumbnailImg}
        alt={productName}
        stockCount={stockCount}
      />
      {stockCount === 0 ? <S.SoldoutMark>SOLDOUT</S.SoldoutMark> : <></>}
    </S.ProductImgLayout>
  );
}
