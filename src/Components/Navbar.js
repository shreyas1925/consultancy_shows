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
          <CurrencyRupeeIcon />
        </div>
        <div className="relative flex items-center h-10 cursor-pointer my-auto ">
          <img src="" alt="" srcset="" />
        </div>

        <div className="flex items-center md:border-2 py-2 rounded-full">
          <input
            type="text"
            // value={searchInput}
            // onChange={(e) => setSearchInput(e.target.value)}
            className=""
            placeholder="Explore more"
          />
          <SearchIcon className="rounded-full p-2 cursor-pointer " />
        </div>

        <div className="flex items-center cursor-pointer space-x-2 justify-end opacity-60">
          <p className="font-sans hidden md:inline-block">Buy me a coffee</p>
          <CurrencyRupeeIcon className="" height="20px" />

          <div className="flex items-center border-2 shadow-md space-x-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
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
