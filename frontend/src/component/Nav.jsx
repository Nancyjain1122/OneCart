import React, { useState, useContext } from 'react';
import { IoSearchCircleOutline, IoSearchCircle } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/vcart-logo.png';
import { authDataContext } from '../context/authContext';
import { userDataContext } from '../context/UserContext';
import { IoMdHome } from "react-icons/io";
import { BsCollection } from "react-icons/bs";
import { FiPhone } from 'react-icons/fi';
import { shopDataContext } from '../context/ShopContext';

function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const serverUrl = useContext(authDataContext);
  const { userData, setUserData } = useContext(userDataContext);
  const {getCartCount} = useContext(shopDataContext)

  const handleLogout = async () => {
    try {
      const res = await fetch(`${serverUrl}/api/auth/logout`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        setUserData(null);
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <div className="relative w-full">
  
      <div className="w-full h-[70px] bg-[#ecfafaec] z-20 fixed top-0 left-0 flex items-center justify-between px-[30px] shadow-md shadow-black">

        <div className="w-[20%] lg:w-[30%] flex items-center gap-[10px] cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="w-[30px]" />
          <h1 className="text-[25px] text-black font-sans">OneCart</h1>
        </div>

   
        <div className='w-[50%] lg:w-[30%] hidden md:flex'>
          <ul className="flex justify-center gap-[20px] text-white">
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=>navigate("/")}>HOME</li>
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=>navigate("/Collections")}>COLLECTIONS</li>
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=>navigate("/About")}>ABOUT</li>
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=>navigate("/Contact")}>CONTACT</li>
          </ul>
        </div>

       
        <div className="w-[30%] flex justify-end gap-[20px] relative">
         
          {showSearch ? (
            <IoSearchCircle
              className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          ) : (
            <IoSearchCircleOutline
              className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
              onClick={() => {
                setShowSearch(true);
                setShowProfile(false);
              }}
            />
          )}

         
          <div className="relative">
            <div
              className="w-[32px] h-[32px] bg-black text-white rounded-full flex items-center justify-center text-[15px] font-semibold cursor-pointer"
              onClick={() => {
                setShowProfile(!showProfile);
                setShowSearch(false);
              }}
            >
              {userData ? userData.name.charAt(0).toUpperCase() : <FaCircleUser />}
            </div>

          
            {showProfile && (
              <div className="absolute w-[220px] bg-[#000000d7] top-[70px] right-0 border border-[#aaa9a9] rounded-[10px] z-30">
                <ul className="w-full flex flex-col text-[17px] text-white">
                  {!userData && (
                    <li
                      className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                      onClick={() => {
                        navigate("/login");
                        setShowProfile(false);
                      }}
                    >
                      Login
                    </li>
                  )}
                  {userData && (
                    <>
                      <li
                        className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                      <li className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">Orders</li>
                    </>
                  )}
                  <li className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer" onClick={()=>navigate("/About")}>About</li>
                </ul>
              </div>
            )}
          </div>

        
       <div className="relative" >
  <MdOutlineShoppingCart className="w-[30px] h-[30px] text-[#000000] cursor-pointer hidden md:block" onClick={()=>navigate("/Cart")}/>
  <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[12px] font-bold rounded-full w-5 h-5 flex items-center justify-center hidden md:flex">
    {getCartCount() || 0}
  </span>
</div>

        </div>
      </div>

    
      {showSearch && (
        <div className="w-full h-[80px] bg-[#d8f6f9dd] absolute top-[70px] left-0 z-10 flex items-center justify-center">
          <input
            type="text"
            className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]"
            placeholder="Search Here"
          />
        </div>
      )}

<div className='w-[100vw] h-[90px] flex items-center justify-between px-[30px] fixed bottom-0 left-0 bg-[#191818] md:hidden z-50'>
      <button className='text-white flex items-center justify-center flex-col gap-[2px]'>
        <IoMdHome className='w-[30px] h-[30px]' onClick={()=>navigate("/")} />
        <span className="text-sm" >Home</span>
      </button>

      <button className='text-white flex items-center justify-center flex-col gap-[2px]'>
        <BsCollection className='w-[30px] h-[30px]' onClick={()=>navigate("/collections")} />
        <span className="text-sm" >Collection</span>
      </button>
 <button className='text-white flex items-center justify-center flex-col gap-[2px]'>
        <FiPhone  className='w-[30px] h-[30px]' onClick={()=>navigate("/contact")}/>
        <span className="text-sm" >Contact</span>
      </button>
      <button className='text-white flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/Cart")}>
        <MdOutlineShoppingCart  className='w-[30px] h-[30px]' />
        <span className="text-sm">Cart</span>
      </button>
      <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py- [2px] text-black font-semibold rounded-full text- [9px] top-[8px] right-[18px]'>{getCartCount()}</p>
    </div>






    </div>
  );
}

export default Nav;
