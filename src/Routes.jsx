import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Loader from "./Login/Loader";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loader/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}