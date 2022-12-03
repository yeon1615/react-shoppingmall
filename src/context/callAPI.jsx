import { createContext } from 'react';

async function getProductData() {
  try {
    const response = await fetch('https://test.api.weniv.co.kr/mall');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getProductDataRes = createContext(getProductData());
