import { useState } from 'react';
import uuid from 'react-uuid';
import * as S from './Coupon-style';

export default function Coupon({ couponData }) {
  const [selectedCoupons, setSelectedCoupons] = useState([]);
  const handleSelectClick = (e) => {
    const selectedCoupon = e.target.value;

    if (selectedCoupon !== 'default') {
      if (selectedCoupons.indexOf(selectedCoupon) === -1) {
        setSelectedCoupons([...selectedCoupons, selectedCoupon]);
      }
    }
  };

  const handleBtnClick = (e) => {
    console.log(e);
  };

  return (
    <S.CouponLayout>
      <S.CouponTitle>쿠폰 사용</S.CouponTitle>
      {/* <label htmlFor='coupon'>쿠폰 선택</label> */}
      <S.CouponSelectBox defaultValue='default' onChange={handleSelectClick}>
        {couponData ? (
          <>
            <option key='default' value='default'>
              쿠폰 선택
            </option>
            {couponData.map((item) => (
              <option key={uuid()} value={item.couponName}>
                {item.couponName}
              </option>
            ))}
          </>
        ) : (
          <></>
        )}
      </S.CouponSelectBox>
      <div>
        {selectedCoupons.map((item) => (
          <S.SelectedCoupon key={uuid()}>
            <S.CouponName>{item}</S.CouponName>
            <S.DeleteButton onClick={handleBtnClick}></S.DeleteButton>
          </S.SelectedCoupon>
        ))}
      </div>
    </S.CouponLayout>
  );
}
