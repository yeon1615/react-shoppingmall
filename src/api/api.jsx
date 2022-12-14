import { createContext } from 'react';

export const getProductData = async () => {
  try {
    const response = await fetch('https://test.api.weniv.co.kr/mall');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCouponData = async () => {
  try {
    const response = await fetch('https://test.api.weniv.co.kr/coupon');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDataRes = createContext(getProductData());

// export const getCouponDataRes = createContext(getCouponData());
