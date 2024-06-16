import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo.png"
import Navbar from "./Navbar";
import { handleIsMenuOpen } from "../../../redux/slices/product";
import { FaPhoneAlt } from "react-icons/fa";


function Header() {
 
  const { isMenuOpen } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className=" fixed  z-50 w-full ">

<div className=" bg-gray-500 min-h-20px text-white flex justify-center">
  <p className=" flex items-center gap-2"> <FaPhoneAlt />  Contact & Whatsapp No. - <a href="tel:7869550142">7869550142</a> </p>
</div>

      <div className="border-b-2 border-gray-500 f bg-white">
        <div className="w-11/12 mx-auto flex h-[60px] items-center justify-between relative">
          <div className="flex  items-center ">
            <RxHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => dispatch(handleIsMenuOpen())}
            />
            <Navbar isOpen={isMenuOpen} setIsOpen={handleIsMenuOpen} />
          </div>
          <div className=" ">
            <Link to="/">
              <div className="lg:text-xl md:text-xl font-bold tracking-wider text-center flex w-full justify-center ">
                    {/* <img src={logo}    alt=""
                    className=" relative top-0"
                    width={120}/> */}

                    Surya Diagnostics Lab
              </div>
            </Link>
          </div>

          <div>
           <button className=" flex flex-col font-semibold bg-red-400 p-1 rounded-lg text-[12px]">
            Any Query ?
            <a href="tel:7869550142" className=" text-yellow-200 ">7869550142</a>
           </button>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Header;
