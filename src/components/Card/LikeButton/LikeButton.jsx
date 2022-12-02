import { useState } from 'react';
import * as S from './LikeButton-style';

export default function LikeButton() {
  const [clicked, setClicked] = useState(false);
  const handleBtnClick = (e) => {
    setClicked(!clicked);
  };

  return (
    <S.LikeButton onClick={handleBtnClick} isClicked={clicked}></S.LikeButton>
  );
}
