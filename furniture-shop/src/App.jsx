import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Home from "./components/home";
import Registration from "./components/Registration";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
      <Route path="/Registration/:32" element={<Registration/>}/>
        
      </Routes>
     <Registration/>
       <Footer /> 
      </>
  );
}

export default App;
