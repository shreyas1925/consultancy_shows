import React from "react";
import {
  SearchIcon,
  CurrencyRupeeIcon,
  UsersIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
const Navbar = () => {
  return (
    <div>
      <header className="sticky-top z-50  bg-white  p-3">
        <div className="row">
          <div className="col-sm-3 col-md-4 col-12 ">
            <img src="" alt="" srcset="" />
          </div>

          <div className="col-sm-3 col-md-4 col-12">
            <input
              type="text"
              // value={searchInput}
              // onChange={(e) => setSearchInput(e.target.value)}
              className=""
              placeholder="Explore more"
            />
            <SearchIcon className="icon" />
          </div>

          <div className="col-sm-3 col-md-4 col-12">
            <p className="">Buy me a coffee</p>
            <CurrencyRupeeIcon className="icon" height="20px" />

            <div className="">
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
