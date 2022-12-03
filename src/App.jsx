import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
export default App;
