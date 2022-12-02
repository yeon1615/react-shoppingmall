import styled from 'styled-components';
import btnOn from '../../../assets/images/icon-heart-on.svg';
import btnOff from '../../../assets/images/icon-heart.svg';

export const LikeButton = styled.button`
  width: 22px;
  height: 22px;
  background: ${(props) =>
    props.isClicked !== false
      ? `url(${btnOn}) no-repeat center / contain`
      : `url(${btnOff}) no-repeat center / contain`};
`;
