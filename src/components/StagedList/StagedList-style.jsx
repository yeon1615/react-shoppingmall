import styled from 'styled-components';

export const StagedListLayout = styled.section`
  position: relative;
  text-align: center;
`;

export const StagedListTitle = styled.h3`
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
  text-align: left;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
`;

export const StagedListTable = styled.table`
  width: 100%;
  margin-top: 72px;
`;

export const TheadTh = styled.th`
  width: ${(props) => (props.className === 'productInfo' ? '45%' : '16%')};
  height: 60px;
  vertical-align: middle;
  font-size: 18px;
  background-color: var(--main-bg-color);
  &:first-child {
    width: 5%;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 58px;
  right: 0;
  padding: 10px 19px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  line-height: 20px;
  background-color: white;
`;
