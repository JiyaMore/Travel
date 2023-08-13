import logo from './logo.svg';
import './App.css';
import Home from './Components/Homepage';
import About from './Components/About';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Components/Services';



function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          
          <Route path="/service"  element={<Services/>} />
           <Route path="*" element={<NoPage />} />
        
      </Routes>
    
    </>
  );
}

export default App;
