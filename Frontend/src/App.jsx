import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './Component/Footer';
import Header from './Component/Header';
import TopHeader from './Component/TopHeader';
import ScrollToTopButton from './Component/ScrollToTop';
import WhatsAppIcon from './Component/WhastappIcon';
import ContactPage from './pages/Contact/Contact';
import SplashScreen from './Component/SplashScreen'; // Import the splash screen component
import ServiceDetail from './pages/Services/ServiceDetail';
import Cases from './pages/Cases/Cases';
import DoctorAbout from './pages/About/AboutDoctor';
import BlogDetail from './pages/Blog/BlogDetail';
import BlogPage from './pages/Blog/BlogPage';
import Headers from './Component/Headers';
import SocialMedia from './Component/SocialMedia';
import BottomFooter from './Component/BottomFooter';
import SocialMediaIcons from './Component/SocialMedia';
import 'swiper/swiper-bundle.css';
import BlogFetch from './pages/Blog/BlogFetch';
import ContactForm from './pages/Contact/ContactForm';

const App = () => {
  const [showSplash, setShowSplash] = useState(false); // Control splash screen visibility

  // Handle initial splash screen display
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 1 second
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(splashTimeout); // Clean up the timeout on unmount
  }, []);

  return (
    <div>
      {showSplash ? (
        <SplashScreen /> 
      ) : (
        <>
          <TopHeader />
          <Header />
          {/* <Headers/> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-dr-manas-aggarwal' element={<DoctorAbout/>} />
            <Route path='/contact' element={<ContactForm/>} />
            <Route path='/treatment/:name/:details' element={<ServiceDetail/>} />
            <Route path='/cases' element={<Cases/>} />
            <Route path='/blog' element={<BlogPage/>} />
            <Route path='/blog/:title' element={<BlogDetail/>} />


          </Routes>
     
          <Footer />
          <BottomFooter/>
          <WhatsAppIcon />
          <SocialMediaIcons/>
          {/* <ScrollToTopButton /> */}
        </>
      )}
    </div>
  );
};

export default App;
