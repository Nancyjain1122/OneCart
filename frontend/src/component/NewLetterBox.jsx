import React from 'react';

function NewLetterBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-[99vw] min-h-[40vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-center justify-center px-4 py-8 gap-4'>
      <p className='text-[18px] md:text-[28px] text-[#a5faf7] font-semibold text-center px-2'>
        Subscribe now & get 20% off
      </p>
      <p className='text-[14px] md:text-[18px] text-blue-100 font-medium text-center max-w-[700px]'>
        Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.
      </p>

      <form
        onSubmit={handleSubmit}
        className='w-full max-w-[700px] flex flex-col md:flex-row items-center justify-center gap-4 mt-4 px-4'
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          className='w-full md:w-[70%] h-[45px] px-4 text-black rounded-lg bg-slate-300 shadow-sm shadow-black placeholder:text-sm'
        />
        <button
          type="submit"
          className='w-full md:w-auto px-6 h-[45px] bg-[#2e3030c9] text-white rounded-lg shadow-sm shadow-black border border-[#80808049] hover:bg-slate-500 transition'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewLetterBox;
