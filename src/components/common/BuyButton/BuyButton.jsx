import * as S from './BuyButton-style';

export default function BuyButton({ className, stockCount }) {
  let innerText = '';
  if (stockCount !== 0) {
    if (className === 'buyNow') {
      innerText = '바로 구매';
    } else if (stockCount !== 0) {
      innerText = '선택 상품 주문하기';
    }
  } else if (stockCount === 0) {
    innerText = '품절된 상품입니다.';
  }
  return <S.BuyButton stockCount={stockCount}>{innerText}</S.BuyButton>;
}
