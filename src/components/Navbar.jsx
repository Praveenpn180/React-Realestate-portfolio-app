import React from "react";
import {useState , useEffect} from "react"
import {getAuth , onAuthStateChanged } from "firebase/auth";
import { useLocation , useNavigate } from "react-router-dom";


const Navbar = () => {
 
  const [pageState, setPageState] = useState("login");
  const navigate = useNavigate()
  const location = useLocation()
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("login");
      }
    });
  }, [auth]);
  const pathmatchroute = (route)=>{
    if(route===location.pathname){
      return true
    }
  }
  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between px-3 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img className="h-5 cursor-pointer" 
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
           alt="logo"
           onClick={() => navigate("/")} />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
            border-b-[3px] border-b-transparent hover:text-gray-600 ${
              pathmatchroute('/') && 'text-black border-b-red-500'}
              `} onClick={() => navigate("/")}>Home</li>

            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
            border-b-[3px] border-b-transparent hover:text-gray-600 ${
              pathmatchroute('/offers')&& 'text-black border-b-red-500'}
              `} onClick={() => navigate("/offers")}>Offers</li>

            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
            border-b-[3px] border-b-transparent hover:text-gray-600 ${
              (pathmatchroute('/login')|| pathmatchroute('/profile'))&& 'text-black border-b-red-500'}
              `} onClick={() => navigate("/profile")}>{pageState}</li>
            {pageState === "Profile"&&  <li><button className="cursor-pointer py-3 text-sm font-semibold text-red-300
            border-b-[3px] border-b-transparent hover:text-red-600" onClick={handleLogout}>Log Out</button></li> }

          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
