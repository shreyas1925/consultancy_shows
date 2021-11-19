import React from "react";
import {
  SearchIcon,
  CurrencyRupeeIcon,
  //   UsersIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react";
const Navbar = () => {
  return (
    <div>
      <header className="sticky-top z-50  bg-white  p-3">
        <div className="row"></div>
        <div className="relative flex items-center h-10 cursor-pointer my-auto ">
          <img src="" alt="" srcset="" />
          <button className="btn btn"></button>
        </div>

        <div className="flex items-center md:border-2 py-2 rounded-full">
          <input
            type="text"
            // value={searchInput}
            // onChange={(e) => setSearchInput(e.target.value)}
            className="text-gray-600 text-sm pl-5 bg-transparent outline-none flex-grow "
            placeholder="Explore more"
          />
          <SearchIcon className="hidden md:inline-block h-8 bg-blue-400  text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        <div className="flex items-center cursor-pointer space-x-2 justify-end opacity-60">
          <p className="font-sans hidden md:inline-block">Buy me a coffee</p>
          <CurrencyRupeeIcon className="h-6" />

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
