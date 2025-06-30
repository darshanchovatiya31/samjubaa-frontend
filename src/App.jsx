import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollTopButton from './components/ScrollTopButton';
import TalkOnWhatsapp from './components/TalkOnWhatsapp';
import AboutUs from './pages/AboutUs';


function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <TalkOnWhatsapp/>
      <ScrollTopButton/>
    </BrowserRouter>
    </>
  )
}

export default App
