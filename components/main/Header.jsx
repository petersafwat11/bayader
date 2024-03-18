import React from 'react';

function Header() {
  return (
    <header className="container my-12 lg:my-24">
      <div className="space-y-8">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-primary-800 text-5xl lg:text-7xl leading-[110%] text-center break-words">
            <span className="text-3xl lg:text-5xl text-primary-600 block mb-2">
              The platform for your
            </span>
            custom packaging
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div>
                <span className="relative hero_growingStripeDesign__mkVNf">
                  <span className="relative font-extrabold text-2xl lg:text-3xl text-slate-800 selection:bg-primary-100 selection:text-primary-800 z-1">
                    Design.&nbsp;
                  </span>
                </span>
                <span className="relative  hero_growingStripePreview__sCJwT">
                  <span className="relative font-extrabold text-2xl lg:text-3xl text-slate-800 selection:bg-primary-100 selection:text-primary-800 z-1">
                    Preview.&nbsp;
                  </span>
                </span>
                <span className="relative  hero_growingStripePrint__t_Kaz">
                  <span className="relative font-extrabold text-2xl lg:text-3xl text-slate-800 selection:bg-primary-100 selection:text-primary-800 z-1">
                    Print.
                  </span>
                </span>
              </div>
            </div>
            <h2 className="text-slate-500 font-thin text-base font-inter lg:text-lg text-center">
              One place to manage the entire packaging process, from design to
              delivery.
            </h2>
          </div>
          <a href="/select-box/en/dieline-boxes">
            <button className="btn btn-large btn-filled">Create now</button>
          </a>
        </div>
        <div className="duration-700 transition-all opacity-100 transform translate-y-0 scale-100">
          {/* <video
            playsinline=""
            autoplay=""
            loop=""
            className="w-full h-full object-cover rounded-xl overflow-hidden"
            alt="One place to manage the entire packaging process, from design to delivery."
          >
            <source src="/index/hero.mp4" type="video/mp4" />
            <source src="/index/hero.webm" type="video/webm" />
            <track
              src="/"
              kind="captions"
              srclang="en"
              label="english_captions"
            />
          </video> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
