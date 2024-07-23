import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Loader from "./Login/Loader";
import Home from "./Home/Home";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loader/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/News" element={<Home/>}></Route>
                <Route path="/pages" element={<Home/>}></Route>
                <Route path="/acessibility" element={<Home/>}></Route>
                <Route path="/config" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}