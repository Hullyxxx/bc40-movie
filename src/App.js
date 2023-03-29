import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import DetailPage from './Page/DetailPage/DetailPage';
import Layout from './Layout/Layout';
import BookingPage from './Page/BookingPage/BookingPage';
import NotFoundPage from './Page/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout Component={HomePage} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/detail/:id' element={<Layout Component={DetailPage} />} />
          <Route path='/booking/:id' element={<Layout Component={BookingPage} />} />
          <Route path='*' element={<Layout Component={NotFoundPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
