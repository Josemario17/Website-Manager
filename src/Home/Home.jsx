import { Link } from "react-router-dom";
import NavBarLeft from "../Components/MainComponentes/NavBarLeft";
import NavBarTop from "../Components/MainComponentes/NavBarTop";
import Dashboard from "../Components/MainComponentes/Dashboard";
import { useAllStore } from "../Store/AppStore";
import News from "../Components/MainComponentes/News";

export default function Home() {
  const { dasboardPath } = useAllStore();


  return (
    <>
      <div className="w-screen h-screen max-w-full flex min-w-[1200px]">
        <NavBarLeft></NavBarLeft>
        <div className="w-full h-auto pl-24">
          <NavBarTop></NavBarTop>
          {
            dasboardPath === "Dashboard" && <Dashboard />
          } 
          {
            dasboardPath === "News" && <News />
          }
        </div>
      </div>
    </>
  );
}
