import React from 'react';
import { RiExchangeFundsLine } from 'react-icons/ri';
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import Title from './Title';

function OurPolicy() {
  return (
    <div className='w-full min-h-[23vh] md:h-[70vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] px-4 py-10 gap-10'>
      <div className='text-center'>
        <Title text1="OUR" text2="POLICY" />
        <p className='text-sm md:text-lg text-blue-100 mt-2 max-w-[90vw] md:max-w-[700px]'>
          Customer-Friendly Policies Committed to Your Satisfaction and Safety.
        </p>
      </div>

      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap px-4'>
        <div className='w-full md:w-[300px] flex flex-col items-center text-center gap-4'>
          <RiExchangeFundsLine className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#90b9ff]' />
          <p className='text-[19px] md:text-[24px] font-semibold text-[#a5e8f7]'>Easy Exchange Policy</p>
          <p className='text-[13px] md:text-[16px] text-[aliceblue]'>
            Exchange Made Easy Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        <div className='w-full md:w-[300px] flex flex-col items-center text-center gap-4'>
          <TbRosetteDiscountCheckFilled className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#90b9ff]' />
          <p className='text-[19px] md:text-[24px] font-semibold text-[#a5e8f7]'>7 Days Return Policy</p>
          <p className='text-[13px] md:text-[16px] text-[aliceblue]'>
            Shop with Confidence 7 Days Easy Return Guarantee.
          </p>
        </div>

        <div className='w-full md:w-[300px] flex flex-col items-center text-center gap-4'>
          <BiSupport className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#90b9ff]' />
          <p className='text-[19px] md:text-[24px] font-semibold text-[#a5e8f7]'>Best Customer Support</p>
          <p className='text-[13px] md:text-[16px] text-[aliceblue]'>
            Trusted Customer Support Your Satisfaction Is Our Priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
