import { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import './App.css';
import { Footer } from '../Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { sideBarLinks } from '../../utils/constants';
import { AboutProject } from '../AboutProject/AboutProject';
import AboutUs from '../AboutUs/AboutUs';

/** Корневой компонент */
function App() {
  
  const [sideBar, setSideBar] = useState(false);
  const location = useLocation();

  return (
    <div className={'app'}>
      <Header setSideBar={setSideBar} />
      <Routes>
        <Route 
          path='/project' 
          element={<AboutProject />} 
        />
        <Route 
          path='/' 
          element={<AboutUs />} 
        />
      </Routes>
      <BurgerMenu 
        sideBar={sideBar} 
        setSideBar={setSideBar} 
        navItems={sideBarLinks} 
      />
      {<Footer fillColor={location.pathname === '/project' ? "#F5F5F5" : ''} />}
    </div>
  );
};

export default App;
