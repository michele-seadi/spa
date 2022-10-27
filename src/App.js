// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Courses from "./components/pages/Courses";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  return (
   <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/courses" element={<Courses/>}/>  
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
   </Router>
  );
}

export default App;
