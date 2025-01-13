 import { Route, Routes } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Footer from "./Footer";
 import Home from "./components/Home";
 import Registration from "./components/Registration";
 import BedRoom from "./components/BedRoom";
 import Dining from "./components/Dining";
 import Living from "./components/Living";
import DataContext from "./components/DataContext";





function App() {
  return (
    <>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/Bedroom" element={<BedRoom/>}/>
      <Route path="/Living" element={<Living/>}/>
      <Route path="/Dining" element={<Dining/>}/>
      <Route path="/Product/:id" element={<Product/>}/>
      <Route path="/DataContext" element={<DataContext/>}/>
      </Routes>

       <Footer />  
      
      </>
  );
}

export default App;
