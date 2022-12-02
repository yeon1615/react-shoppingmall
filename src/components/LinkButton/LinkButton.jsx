import { Link, useLocation } from 'react-router-dom';
import * as S from './LinkButton-style';

export default function LinkButton(props) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path === '/' ? (
        <S.CartButton to='/cart'></S.CartButton>
      ) : (
        <S.HomeButton to='/'></S.HomeButton>
      )}
    </>
  );
}
