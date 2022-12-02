import ProductImage from './ProductImage/ProductImage';
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';
import LikeButton from './LikeButton/LikeButton';

import Modal from '../Modal/Modal';

import * as S from './Card-style';
import { useState } from 'react';

export default function Card(productData) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleisModalOpen = (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <>
      <S.Li onClick={handleisModalOpen}>
        <S.ImgContainer>
          <ProductImage
            productName={productData.productName}
            thumbnailImg={productData.thumbnailImg}
            stockCount={productData.stockCount}
          />
        </S.ImgContainer>
        <S.Div>
          <ProductName productName={productData.productName} />
          <LikeButton />
        </S.Div>
        <ProductPrice price={productData.price} />
      </S.Li>
      {isModalOpen ? (
        <Modal {...productData} {...{ setIsModalOpen }}></Modal>
      ) : (
        <></>
      )}
    </>
  );
}
