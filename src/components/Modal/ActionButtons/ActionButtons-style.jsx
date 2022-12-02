import styled from 'styled-components';
import CartIcon from '../../../assets/images/icon-shopping-cart.svg';
import CartIconWhite from '../../../assets/images/icon-shopping-cart-white.svg';
import LikeIconOff from '../../../assets/images/icon-heart.svg';
import LikeIconOn from '../../../assets/images/icon-heart-on.svg';

export const ActionButtonsLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ActionButton = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export const CartButton = styled(ActionButton)`
  background: ${(props) =>
    props.stockCount !== 0
      ? `
  url(${CartIcon}) no-repeat center / 22px 22px`
      : `
  url(${CartIconWhite}) no-repeat center / 22px 22px`};
  background-color: ${(props) =>
    props.stockCount !== 0 ? 'white' : '#BDBDBD'};
`;

export const LikeButton = styled(ActionButton)`
  background: ${(props) =>
    props.isClicked !== false
      ? `url(${LikeIconOn}) no-repeat center / 22px 22px`
      : `url(${LikeIconOff}) no-repeat center / 22px 22px`};
`;
