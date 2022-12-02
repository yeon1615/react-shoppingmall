import { createContext } from 'react';
import axios from 'axios';

async function getProductData() {
  const response = await fetch('https://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data;
}

export const getProductDataRes = createContext(getProductData());
