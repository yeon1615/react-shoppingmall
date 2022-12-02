import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartIcon from '../../assets/images/icon-shopping-cart-white.svg';
import HomeIcon from '../../assets/images/icon-home.svg';

const LinkButton = styled(Link)`
  display: block;
  position: sticky;
  top: 0;
  width: 80px;
  height: 80px;
  transform: translateX(60px);
  border-radius: 50%;
`;

export const CartButton = styled(LinkButton)`
  background: var(--main-color) url(${CartIcon}) no-repeat center / 40px 40px;
`;

export const HomeButton = styled(LinkButton)`
  background: var(--main-color) url(${HomeIcon}) no-repeat center / 40px 40px;
`;
