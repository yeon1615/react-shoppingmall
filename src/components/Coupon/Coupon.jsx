import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './Coupon-style';

export default function Coupon({ couponData }) {
  return (
    <div>
      <S.CouponTitle>쿠폰 사용</S.CouponTitle>
      {/* <label htmlFor='coupon'>쿠폰 선택</label> */}
      <S.CouponSelectBox defaultValue='default'>
        {couponData !== undefined ? (
          <>
            <option key='default' value='default'>
              쿠폰 선택
            </option>
            {couponData.map((item, index) => (
              <option key={`coupon${index}`} value={item.couponName}>
                {item.couponName}
              </option>
            ))}
          </>
        ) : (
          <></>
        )}
      </S.CouponSelectBox>
    </div>
  );
}
