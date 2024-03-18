import React from 'react';

function Cutomization() {
  return (
    <div className="container">
      <div className="duration-700 transition-all opacity-100 transform translate-y-0 scale-100">
        <div className="bg-gradient-to-bottom from-white to-white/0 bg-gradient-to-b lg:bg-gradient-to-r p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden">
          <div className="w-full flex justify-center mb-6 lg:mb-12">
            <span className="text-slate-800 px-1 font-extrabold xl:text-5xl lg:text-4xl text-3xl bg-gradient-to-r from-[#6d2add]/80 via-[#9640ff]/80 to-[#2571ff]/80 bg-[length:100%_10px] bg-no-repeat bg-bottom">
              Design.
            </span>
          </div>
          <article className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="duration-700 transition-all opacity-100 transform translate-y-0">
                <h3 className="text-primary-600 xl:text-xl lg:text-lg text-base font-semibold">
                  Tailor-made packaging for your product
                </h3>
                <h4>Total customization</h4>
              </div>
              <p className="lg:text-lg">
                Create customized packaging, from design to print. Enter the
                dimensions of the product to be packaged without having to adapt
                to pre-existing formats. With over 5 trillion possible sizes,
                products will have the perfect packaging. Packly empowers you to
                print customizable boxes in stunning full color and high
                quality. The online platform offers a wide range of materials
                and special finishes for all of your brand needs. Every box
                style is tailored to showcase your unique product. Elevate box
                with luxurious touches like shimmering gold or silver foil. Add
                custom cuts and windows to make it truly extraordinary.
              </p>
              <div className="mt-auto">
                <a href="/select-box/en/dieline-boxes">
                  <button className="btn btn-filled w-full md:w-fit">
                    Customize now
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Cutomization;
