import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Home from "./components/home";
import Registration from "./components/Registration";
import Room from "./components/BedRoom";
import Dining from "./components/Dining";






function App() {
  return (
    <>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
      <Route path="/Registration/:id" element={<Registration/>}/>
      <Route path="/Room" element={<Room/>}/>
      
      
        
      </Routes>
      <Dining/>
      
      


      
     
    
       <Footer /> 
      </>
  );
}

export default App;
