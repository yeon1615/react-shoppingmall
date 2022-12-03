import { createContext } from 'react';

const getCouponData = async () => {
  try {
    const response = await fetch('https://test.api.weniv.co.kr/coupon');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCouponDataRes = createContext(getCouponData());
