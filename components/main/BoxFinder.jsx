import React from 'react';

function BoxFinder() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-800  to-primary-900 lg:gap-24 gap-12 lg:py-24 py-12">
      <div className="container px-10">
        <div className="duration-700 transition-all opacity-100 transform translate-y-0 scale-100">
          <div className="bg-white p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-12 lg:w-16">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 26C41.2 26 40.6 25.8 40 25.4V32C40 32.8 39.6 33.4 39 33.8L26 41.2V25.2L28.8 23.6C27.2 23.2 25.8 22.4 24.6 21.4L24 21.6L10 13.6L20.8 7.39999C21.6 5.19999 23.2 3.39999 25.2 1.99999C23.8 1.79999 22.2 1.99999 21 2.59999L7 10.6C5.2 11.8 4 13.8 4 16V32C4 34.2 5.2 36.2 7 37.2L21 45.2C21.8 45.6 22.6 46 23.6 46C23.8 46 23.8 46 24 46C24.2 46 24.2 46 24.4 46C25.4 46 26.2 45.6 27 45.2L41 37.2C42.8 36.2 44 34.2 44 32V25.4C43.4 25.8 42.8 26 42 26ZM22 41.2L9 33.8C8.4 33.4 8 32.6 8 32V17.2L22 25.2V41.2Z"
                      fill="#1F272D"
                    ></path>
                    <path
                      d="M43.4 20.6L40.4 17.6C41.4 16 42 14 42 12C42 6.4 37.6 2 32 2C26.4 2 22 6.4 22 12C22 17.6 26.4 22 32 22C34 22 36 21.4 37.6 20.4L40.6 23.4C41 23.8 41.4 24 42 24C42.4 24 43 23.8 43.4 23.4C44.2 22.6 44.2 21.4 43.4 20.6ZM32 18C28.6 18 26 15.4 26 12C26 8.8 28.6 6 32 6C35.4 6 38 8.8 38 12C38 15.2 35.4 18 32 18Z"
                      fill="#1F272D"
                    ></path>
                    <path
                      d="M32 18C35.3137 18 38 15.3137 38 12C38 8.68629 35.3137 6 32 6C28.6863 6 26 8.68629 26 12C26 15.3137 28.6863 18 32 18Z"
                      fill="transparent"
                      className="animate-magnifying-fill"
                    ></path>
                  </svg>
                </div>
                <h3>BoxFinder</h3>
              </div>
              <p>Find the packaging based on the dimensions of your product.</p>
              <form
                className="flex flex-col gap-4 gtm-box-finder-home items-center"
                method="get"
                action="/boxfinder"
              >
                <div className="flex flex-col gap-4 md:flex-row items-center">
                  <div className="relative">
                    <label className="hidden" for="dimension-a"></label>
                    <input
                      placeholder=""
                      max="9999"
                      step="0.01"
                      className="px-3 py-2 border-2 bg-transparent border-slate-300 text-slate-800 caret-primary-400 appearance-none focus:outline-none focus:border-slate-800 rounded-[6px] text-center"
                      type="number"
                      value=""
                      name="a"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pl-1 bg-white text-slate-300">
                      mm
                    </span>
                  </div>
                  <div className="relative">
                    <label className="hidden" for="dimension-b"></label>
                    <input
                      placeholder=""
                      max="9999"
                      step="0.01"
                      className="px-3 py-2 border-2 bg-transparent border-slate-300 text-slate-800 caret-primary-400 appearance-none focus:outline-none focus:border-slate-800 rounded-[6px] text-center"
                      type="number"
                      value=""
                      name="b"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pl-1 bg-white text-slate-300">
                      mm
                    </span>
                  </div>
                  <div className="relative">
                    <label className="hidden" for="dimension-h"></label>
                    <input
                      placeholder=""
                      max="9999"
                      step="0.01"
                      id="dimension-h"
                      className="px-3 py-2 border-2 bg-transparent border-slate-300 text-slate-800 caret-primary-400 appearance-none focus:outline-none focus:border-slate-800 rounded-[6px] text-center"
                      type="number"
                      value=""
                      name="h"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pl-1 bg-white text-slate-300">
                      mm
                    </span>
                  </div>
                </div>
                <a>
                  <button className="btn btn-filled flex items-center justify-center gap-2 disabled:opacity-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    Search
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxFinder;
