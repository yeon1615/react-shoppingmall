import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
