import { Link } from 'react-router-dom';
import Coupon from '../../components/Coupon/Coupon';
import StagedList from '../../components/StagedList/StagedList';
import LinkButton from '../../components/LinkButton/LinkButton';
import * as S from './CartPage-style';

export default function CartPage({ couponData }) {
  return (
    <S.CartPageLayout>
      <S.CartSection>
        <div>
          <S.CartTitle>장바구니/결제</S.CartTitle>
          <Coupon {...{ couponData }} />
          <StagedList />
        </div>
      </S.CartSection>
      <LinkButton to='/' />
    </S.CartPageLayout>
  );
}
