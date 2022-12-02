import * as S from './Modal-style';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductDetail from './ProductDetail/ProductDetail';
import TotalPrice from './TotalPrice/TotalPrice';
import BuyButton from '../common/BuyButton/BuyButton';
import ActionButtons from './ActionButtons/ActionButtons';
import { useRef } from 'react';

export default function Modal(props) {
  const handleModalClose = () => {
    props.setIsModalOpen(false);
  };

  const modalBg = useRef();
  const handleClickBg = (e) => {
    if (e.target === modalBg.current) {
      props.setIsModalOpen(false);
    }
  };

  return (
    <S.ModalBackground ref={modalBg} onClick={handleClickBg}>
      <S.ModalSection>
        <S.ModalRow>
          <S.ProductImg
            src={`https://test.api.weniv.co.kr/${props.thumbnailImg}`}
            alt=''
          />
          <S.ProductInfo>
            <ProductInfo {...props} />
            {props.stockCount !== 0 ? (
              <>
                {props.shippingFee === 0 ? (
                  <S.Shipping>택배배송 / 무료배송</S.Shipping>
                ) : (
                  <S.Shipping>
                    택배배송 / {props.shippingFee.toLocaleString()}원
                  </S.Shipping>
                )}
                <TotalPrice {...props} />
              </>
            ) : (
              <></>
            )}
            <S.Buttons>
              <BuyButton className='buyNow' stockCount={props.stockCount} />
              <ActionButtons stockCount={props.stockCount} />
            </S.Buttons>
          </S.ProductInfo>
        </S.ModalRow>
        <ProductDetail {...props} />
        <S.ButtonCloseModal
          type='button'
          onClick={handleModalClose}
        ></S.ButtonCloseModal>
      </S.ModalSection>
    </S.ModalBackground>
  );
}
