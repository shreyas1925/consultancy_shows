import React from "react";
import "./Navbar.css";
import logo from "../assets/images/chat-logo.jpg";
import {
  SearchIcon,
  CurrencyRupeeIcon,
  // UsersIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
const Navbar = () => {
  return (
    <div className="">
      <header className="sticky-top header bg-white p-3">
        <div className="d-flex justify-content-around">
          <div className="">
            <img src={logo} alt="" srcset="" className="image" />
          </div>

          <div className="search border-2 ">
            <input
              type="text"
              // value={searchInput}
              // onChange={(e) => setSearchInput(e.target.value)}
              className=""
              placeholder="Explore more"
            />
            <SearchIcon className="icon" />
          </div>

          <div className="d-flex align-items-center  justify-content-align-content-between">
            {/* <p className="">Buy me a coffee</p> */}
            <CurrencyRupeeIcon className="icon" height="20px" />

            <div className="d-flex justify-content-between">
              <MenuIcon className="icon" />
              <UserCircleIcon className="icon" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

{
  /* <Image
            src={logo}
            layout="fill"
            objectFit="contain" //unnecessary aspect ratio removed
            objectPosition="left"
          /> */
}
