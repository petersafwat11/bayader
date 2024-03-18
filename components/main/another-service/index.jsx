import React from 'react';
import Print from './Print';
import Quality from './Quality';
import Shipping from './Shipping';

function AnotherService() {
  return (
    <div className="container">
      <div className="duration-700 transition-all opacity-100 transform translate-y-0 scale-100">
        <div className="bg-white p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden">
          <div className="w-full flex justify-center mb-6 lg:mb-12">
            <span className="text-slate-800 px-1 font-extrabold xl:text-5xl lg:text-4xl text-3xl bg-gradient-to-r from-[#00FFFF]/80 via-[#FF00FF]/80 to-[#ffff00]/80 bg-[length:100%_10px] bg-no-repeat bg-bottom">
              Print.
            </span>
          </div>
          <div className="space-y-16">
            <Print />
            <Quality />
            <Shipping />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnotherService;
