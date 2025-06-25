import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Logo from '../assets/vcart-logo.png';
import { authDataContext } from '../context/authContext';
import { userDataContext } from '../context/UserContext';

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const serverUrl = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${serverUrl}/api/auth/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // await getCurrentUser();
        setMessage("✅ Registration successful!");
        setTimeout(() => navigate("/login"), 1000); 
      } else {
        setMessage(`❌ ${data.message || "Registration failed"}`);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage("❌ Something went wrong!");
    }
  };

  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start'>
      <div className='w-full h-[80px] flex items-center px-[30px] gap-[10px] cursor-pointer' onClick={() => navigate("/")}>
        <img className='w-[40px]' src={Logo} alt="logo" />
        <h1 className='text-[22px] font-sans'>OneCart</h1>
      </div>

      <div className='text-center mt-[20px]'>
        <h2 className='text-[25px] font-semibold'>Registration Page</h2>
        <p className='text-[16px] mt-1'>Welcome to OneCart, Place your order</p>
      </div>

      <div className='w-full max-w-[600px] mt-[30px] px-[20px]'>
        <form 
          className='bg-[#00000025] border border-[#96969635] backdrop-blur-md rounded-xl shadow-xl p-[30px] flex flex-col gap-[20px]'
          onSubmit={handleSignup}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-white px-[20px] font-semibold'
            placeholder='Username'
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-white px-[20px] font-semibold'
            placeholder='Email'
            required
          />
          <div className='relative w-full'>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-white px-[20px] pr-[40px] font-semibold'
              placeholder='Password'
              required
            />
            <span 
              className='absolute right-[15px] top-[50%] -translate-y-1/2 text-white cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>

          <button
            type="submit"
            className='w-full h-[50px] bg-[#6060f5] text-white rounded-lg shadow-lg font-semibold hover:bg-[#ffffff33] transition'
          >
            Create Account
          </button>

      
          {message && (
            <p className='text-center text-[15px] text-yellow-300'>{message}</p>
          )}

          <p className='text-center text-[15px]'>
            Already have an account?{' '}
            <span 
              className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' 
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
