import * as S from './ProductDetail-style';

export default function ProductDetail(productData) {
  return (
    <div>
      <h2>상품 정보</h2>
      <S.Table>
        {/* <caption>상품 정보</caption> */}
        <tbody>
          <tr>
            <S.Th>상품 번호</S.Th>
            <S.Td>{productData.id}</S.Td>
            <S.Th>재고 수량</S.Th>
            <S.Td>{productData.stockCount}개</S.Td>
          </tr>
        </tbody>
      </S.Table>
      {productData.detailInfoImage.map((item, index) => (
        <S.DetailInfoImg
          key={index}
          src={` https://test.api.weniv.co.kr/${item}`}
        />
      ))}
    </div>
  );
}
