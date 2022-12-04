import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CartPage from '../pages/CartPage/CartPage';
import NotFound from '../pages/NotFound/NotFound';

const Router = ({ productData, couponData }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage productData={productData} />} />
        <Route path='/cart' element={<CartPage couponData={couponData} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
