import { useState } from 'react';
import * as S from './ActionButtons-style';

export default function ActionButtons({ stockCount }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleLikeClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.ActionButtonsLayout>
      <S.CartButton stockCount={stockCount}></S.CartButton>
      <S.LikeButton onClick={handleLikeClick} {...{ isClicked }}></S.LikeButton>
    </S.ActionButtonsLayout>
  );
}
