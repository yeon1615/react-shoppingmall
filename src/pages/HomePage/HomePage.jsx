import React, { useState, useContext } from 'react';
import { getProductDataRes } from '../../database/callAPI';
import * as S from './HomePage-style';
import Card from '../../components/Card/Card';
import LinkButton from '../../components/LinkButton/LinkButton';

export default function HomePage() {
  const [loadedData, setLoadedData] = useState(null);

  useContext(getProductDataRes).then((data) => {
    setLoadedData(data);
  });

  return (
    <S.MainPageLayout>
      {loadedData !== null ? (
        <>
          <S.ProductList>
            {loadedData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </S.ProductList>
          <LinkButton to='/cart' />
        </>
      ) : (
        <div>오류페이지</div>
      )}
    </S.MainPageLayout>
  );
}
