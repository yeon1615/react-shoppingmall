import React, { useState, useContext } from 'react';
import { getProductDataRes } from '../../api/api';
import * as S from './HomePage-style';
import Card from '../../components/Card/Card';
import LinkButton from '../../components/LinkButton/LinkButton';

export default function HomePage({ productData }) {
  return (
    <S.MainPageLayout>
      {productData !== null ? (
        <>
          <S.ProductList>
            {productData.map((item) => (
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
