import BuyButton from '../common/BuyButton/BuyButton';
import * as S from './StagedList-style';

export default function StagedList() {
  return (
    <S.StagedListLayout>
      <S.StagedListTitle>주문 상품</S.StagedListTitle>
      <S.StagedListTable>
        <thead>
          <tr>
            <S.TheadTh>
              <input type='checkbox' name='selected_all' id='' />
            </S.TheadTh>
            <S.TheadTh className='productInfo'>상품정보</S.TheadTh>
            <S.TheadTh>쿠폰 할인</S.TheadTh>
            <S.TheadTh>배송비</S.TheadTh>
            <S.TheadTh>주문금액</S.TheadTh>
          </tr>
        </thead>
        <tbody>{/* 상품데이터 들어갈 곳 */}</tbody>
        <tfoot>{/* 총금액 들어갈 곳 */}</tfoot>
      </S.StagedListTable>
      <S.DeleteButton>선택 삭제하기</S.DeleteButton>
      <BuyButton className='order' />
    </S.StagedListLayout>
  );
}
