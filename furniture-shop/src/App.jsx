import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Home from "./components/home";
import Registration from "./components/Registration";
import Room from "./components/Room";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
      <Route path="/Registration/:32" element={<Registration/>}/>
      <Route path="/Room" element={<Room/>}/>
      +
        
      </Routes>
      
     
    
       <Footer /> 
      </>
  );
}

export default App;
