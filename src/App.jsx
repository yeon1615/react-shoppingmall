import { useEffect, useState } from 'react';
import { getProductData, getCouponData, getProductDataRes } from './api/api';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [productData, setProductData] = useState(null);
  const [couponData, setCouponData] = useState(null);

  useEffect(() => {
    getProductData().then((data) => {
      setProductData(data);
    });
    getCouponData().then((data) => {
      setCouponData(data);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router {...{ productData, couponData }} />
    </>
  );
}
export default App;
