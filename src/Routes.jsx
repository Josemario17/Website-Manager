import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Loader from "./Login/Loader";
import Home from "./Home/Home";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loader/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}