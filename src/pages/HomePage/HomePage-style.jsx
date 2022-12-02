import styled from 'styled-components';

export const MainPageLayout = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 160px;
  padding-bottom: 156px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  min-width: 1260px;
`;
