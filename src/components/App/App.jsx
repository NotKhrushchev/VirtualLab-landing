import { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import './App.css';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { sideBarLinks } from '../../utils/constants';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import AboutProject from '../AboutProject/AboutProject';

/** Корневой компонент */
function App() {
  
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <div className={'app'}>
      <Header setSideBar={setSideBar} />
      <Routes>
        <Route 
          path='/project' 
          element={<AboutProject />} 
        />
        <Route 
          path='/*' 
          element={<NotFoundPage />} 
        />
      </Routes>
      <BurgerMenu 
        sideBar={sideBar} 
        setSideBar={setSideBar} 
        navItems={sideBarLinks} 
      />
      {<Footer />}
    </div>
  );
};

export default App;
