// import React from "react";
// import "./Navbar.css";
// import logo from "../assets/images/chat-logo.jpg";
// import {
//   SearchIcon,
//   CurrencyRupeeIcon,
//   // UsersIcon,
//   MenuIcon,
//   UserCircleIcon,
// } from "@heroicons/react/solid";
// const Navbar = () => {
//   return (
//     <div className="">
//       <header className="sticky-top header bg-white p-3">
//         <div className="d-flex justify-content-around">
//           <div className="">
//             <img src={logo} alt="" srcset="" className="image" />
//           </div>

//           <div className="search border-2 ">
//             <input
//               type="text"
//               // value={searchInput}
//               // onChange={(e) => setSearchInput(e.target.value)}
//               className=""
//               placeholder="Explore more"
//             />
//             <SearchIcon className="icon" />
//           </div>

//           <div className="d-flex align-items-center  justify-content-align-content-between">
//             {/* <p className="">Buy me a coffee</p> */}
//             <CurrencyRupeeIcon className="icon" height="20px" />

//             <div className="d-flex justify-content-between">
//               <MenuIcon className="icon" />
//               <UserCircleIcon className="icon" />
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

// {
//   /* <Image
//             src={logo}
//             layout="fill"
//             objectFit="contain" //unnecessary aspect ratio removed
//             objectPosition="left"
//           /> */
// }

import React, { useState } from "react";
import "./Navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
import {
  SearchIcon,
  CurrencyRupeeIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="">
          <img src="" alt="" srcset="" />
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/">Logout</NavLink>
            </li>

            <li>
              <button
                type="button"
                className="btn btn-info"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>

        <UserCircleIcon
          className={!showMediaIcons ? "icon" : "icons"}
          style={{ width: "40px" }}
        />
        <div className="social-media">
          {/* menu  */}
          <div className="hamburger-menu ">
            <button
              className="button"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
