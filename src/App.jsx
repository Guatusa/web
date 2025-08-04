import ScrollToTop from "react-scroll-to-top"
import Home from "./Componens/Home"
import './i18n/i18n';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gallery from "./Componens/Gallery";
import Navbar from "./Componens/Navbar";
import Footer from "./Componens/Footer";


function App() {

  return (

       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <ScrollToTop smooth/>
    </Router>

  )
}

export default App
