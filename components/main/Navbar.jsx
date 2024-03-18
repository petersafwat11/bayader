import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="sticky top-0 z-10">
      <div className="relative">
        <div className="w-full bg-white/80 backdrop-blur-lg">
          <nav className="container py-4 flex items-center justify-between relative">
            <Link className="hidden lg:block" href="/">
              <figure className="group transition-all duration-500">
                <svg
                  height="32"
                  viewBox="0 0 143 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.0211L12.0281 15.4667V18.9895L0 24.4492V10.0211ZM13.5439 32L24.9684 26.8211L13.5439 21.6421L2.1193 26.8211L13.5439 32ZM13.5439 12.8281L24.9684 7.64916L13.5439 2.47021L2.13333 7.64916L13.5439 12.8281ZM27.1017 24.4492V10.0211L15.0737 15.4667V18.9895L27.1017 24.4492Z"
                    className="fill-primary-400"
                  ></path>
                  <path
                    d="M72.3511 24.4631H65.5441C65.2774 24.1965 64.9125 23.3965 64.9125 21.3053V16.3228C64.9406 17.0807 64.9406 16.6877 64.9406 16.3088V15.9579C63.2283 16.1403 60.3792 16.6737 60.3792 18.8772C60.3792 20.0561 61.123 20.5474 62.2318 20.5474C62.5265 20.5474 62.7792 20.5193 63.0037 20.4631V24.0281C61.9371 24.5895 60.702 24.8281 59.3406 24.8281C55.9581 24.8281 52.9967 22.9754 52.9967 19.3403C52.9967 16.4491 55.2423 14.5263 57.7687 13.7403C60.0844 13.0246 62.5406 12.7439 64.9406 12.6035V12.4632C64.9406 10.821 64.5055 10.1754 62.8072 10.1754C61.4178 10.1754 60.2388 10.6807 60.0283 12.2105L53.5301 11.607C54.5967 7.07368 58.9195 5.90877 63.0178 5.90877C65.1651 5.90877 67.902 6.18947 69.6844 7.4807C72.0704 9.15087 71.7897 11.5088 71.7897 14.1193V20.5053C71.7757 21.8246 71.8037 23.1719 72.3511 24.4631ZM44.9266 5.8807C43.888 5.8807 42.9476 6.02105 42.1336 6.34386V10.414C42.1616 10.414 42.1897 10.414 42.2178 10.414C44.4634 10.414 44.4353 14.021 44.4353 15.5088C44.4353 16.5474 44.3651 17.8246 44.0704 18.821C43.7897 19.7895 43.1441 20.3228 42.1476 20.3228C40.4353 20.3228 40.2248 18.6526 40.2248 17.3614V6.24561H33.123V30.2035H40.1827V22.4982C41.2915 24.0982 43.0037 24.814 44.8844 24.814C47.4108 24.814 49.3055 23.4667 50.4844 21.2772C51.4529 19.4947 51.7757 17.1789 51.7757 15.1439C51.7757 10.8772 50.0494 5.8807 44.9266 5.8807ZM85.6844 17.1228C85.502 18.4421 84.9406 19.8316 83.3967 19.8316C81.0809 19.8316 81.0388 17.0526 81.0388 15.3403C81.0388 13.7403 81.0388 10.7789 83.2844 10.7789C84.8564 10.7789 85.1371 12.2105 85.3897 13.4596L85.4318 13.6421L91.6774 13.1088C91.1441 8.54737 87.5792 5.90877 83.0879 5.90877C77.4879 5.90877 73.7125 9.93684 73.7125 15.4246C73.7125 18.0351 74.5686 20.4912 76.4213 22.3438C78.3441 24.2386 80.4914 24.8421 83.13 24.8421C87.7616 24.8421 91.116 22.3438 91.7616 17.6421L85.6844 17.1228ZM112.646 6.24561H106.512L102.232 11.1719L100.688 13.193V0H93.6283V24.4631H100.688V19.4386L102.47 17.1509L105.895 24.4631H113.277L107.144 12.5193L112.646 6.24561ZM121.769 0H114.709V24.4631H121.769V0ZM131.214 6.24561H123.551L129.937 22.7228C130.119 23.2281 130.4 23.8316 130.4 24.3649C130.4 25.7965 128.267 25.7544 127.298 25.7544C126.442 25.7544 125.586 25.6421 124.73 25.5438V30.5965C126.162 30.7368 127.256 30.7789 128.337 30.7789C132.407 30.7789 134.218 29.3474 135.579 25.5719L142.597 6.24561H137.39L134.218 15.9439L131.214 6.24561Z"
                    className="fill-primary-800"
                  ></path>
                </svg>
              </figure>
            </Link>
            <Link className="block lg:hidden" href="/">
              <figure className="group transition-all duration-500">
                <svg
                  height="24"
                  viewBox="0 0 143 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.0211L12.0281 15.4667V18.9895L0 24.4492V10.0211ZM13.5439 32L24.9684 26.8211L13.5439 21.6421L2.1193 26.8211L13.5439 32ZM13.5439 12.8281L24.9684 7.64916L13.5439 2.47021L2.13333 7.64916L13.5439 12.8281ZM27.1017 24.4492V10.0211L15.0737 15.4667V18.9895L27.1017 24.4492Z"
                    className="fill-primary-400"
                  ></path>
                  <path
                    d="M72.3511 24.4631H65.5441C65.2774 24.1965 64.9125 23.3965 64.9125 21.3053V16.3228C64.9406 17.0807 64.9406 16.6877 64.9406 16.3088V15.9579C63.2283 16.1403 60.3792 16.6737 60.3792 18.8772C60.3792 20.0561 61.123 20.5474 62.2318 20.5474C62.5265 20.5474 62.7792 20.5193 63.0037 20.4631V24.0281C61.9371 24.5895 60.702 24.8281 59.3406 24.8281C55.9581 24.8281 52.9967 22.9754 52.9967 19.3403C52.9967 16.4491 55.2423 14.5263 57.7687 13.7403C60.0844 13.0246 62.5406 12.7439 64.9406 12.6035V12.4632C64.9406 10.821 64.5055 10.1754 62.8072 10.1754C61.4178 10.1754 60.2388 10.6807 60.0283 12.2105L53.5301 11.607C54.5967 7.07368 58.9195 5.90877 63.0178 5.90877C65.1651 5.90877 67.902 6.18947 69.6844 7.4807C72.0704 9.15087 71.7897 11.5088 71.7897 14.1193V20.5053C71.7757 21.8246 71.8037 23.1719 72.3511 24.4631ZM44.9266 5.8807C43.888 5.8807 42.9476 6.02105 42.1336 6.34386V10.414C42.1616 10.414 42.1897 10.414 42.2178 10.414C44.4634 10.414 44.4353 14.021 44.4353 15.5088C44.4353 16.5474 44.3651 17.8246 44.0704 18.821C43.7897 19.7895 43.1441 20.3228 42.1476 20.3228C40.4353 20.3228 40.2248 18.6526 40.2248 17.3614V6.24561H33.123V30.2035H40.1827V22.4982C41.2915 24.0982 43.0037 24.814 44.8844 24.814C47.4108 24.814 49.3055 23.4667 50.4844 21.2772C51.4529 19.4947 51.7757 17.1789 51.7757 15.1439C51.7757 10.8772 50.0494 5.8807 44.9266 5.8807ZM85.6844 17.1228C85.502 18.4421 84.9406 19.8316 83.3967 19.8316C81.0809 19.8316 81.0388 17.0526 81.0388 15.3403C81.0388 13.7403 81.0388 10.7789 83.2844 10.7789C84.8564 10.7789 85.1371 12.2105 85.3897 13.4596L85.4318 13.6421L91.6774 13.1088C91.1441 8.54737 87.5792 5.90877 83.0879 5.90877C77.4879 5.90877 73.7125 9.93684 73.7125 15.4246C73.7125 18.0351 74.5686 20.4912 76.4213 22.3438C78.3441 24.2386 80.4914 24.8421 83.13 24.8421C87.7616 24.8421 91.116 22.3438 91.7616 17.6421L85.6844 17.1228ZM112.646 6.24561H106.512L102.232 11.1719L100.688 13.193V0H93.6283V24.4631H100.688V19.4386L102.47 17.1509L105.895 24.4631H113.277L107.144 12.5193L112.646 6.24561ZM121.769 0H114.709V24.4631H121.769V0ZM131.214 6.24561H123.551L129.937 22.7228C130.119 23.2281 130.4 23.8316 130.4 24.3649C130.4 25.7965 128.267 25.7544 127.298 25.7544C126.442 25.7544 125.586 25.6421 124.73 25.5438V30.5965C126.162 30.7368 127.256 30.7789 128.337 30.7789C132.407 30.7789 134.218 29.3474 135.579 25.5719L142.597 6.24561H137.39L134.218 15.9439L131.214 6.24561Z"
                    className="fill-primary-800"
                  ></path>
                </svg>
              </figure>
            </Link>
            <ul className={`hidden xl:flex items-center gap-2`}>
              <li className="flex items-center rounded-xs font-medium hover:bg-slate-100 transition-all duration-100 group cursor-pointer relative">
                <span className="p-2 group-hover:text-slate-800">Features</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="transition-transform duration-100 group-hover:-rotate-90 group-hover:stroke-slate-800"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <div className="pt-2 hidden absolute top-10 left-0 group-hover:block">
                  <div className="w-64 p-2 rounded-sm space-y-4 bg-white shadow-soft-48">
                    <a
                      className="block p-2 rounded-xs hover:text-slate-800 hover:bg-slate-100 relative group"
                      href="/en/online-custom-box-printing-service"
                    >
                      Online printing
                    </a>
                    <a
                      className="block p-2 rounded-xs hover:text-slate-800 hover:bg-slate-100 relative group"
                      href="/en/online-3d-packaging-mockup-service"
                    >
                      3D Mockup
                    </a>
                    <a
                      className="block p-2 rounded-xs hover:text-slate-800 hover:bg-slate-100 relative group"
                      href="/en/vector-die-cut-templates-generator"
                    >
                      Dieline generator
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center rounded-xs font-medium hover:bg-slate-100 transition-all duration-100 group cursor-pointer relative">
                <span className="p-2 group-hover:text-slate-800">
                  Categories
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="transition-transform duration-100 group-hover:-rotate-90 group-hover:stroke-slate-800"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <div className="pt-2 hidden absolute top-10 left-0 group-hover:block">
                  <div className="w-64 p-2 rounded-sm space-y-4 bg-white shadow-soft-48">
                    <a
                      className="block p-2 rounded-xs hover:text-slate-800 hover:bg-slate-100 relative group"
                      href="/en/food-safe-packaging-boxes"
                    >
                      Food &amp; Beverage
                    </a>
                    <a
                      className="block p-2 rounded-xs hover:text-slate-800 hover:bg-slate-100 relative group"
                      href="/en/health-and-care-cosmetic-packaging"
                    >
                      Health &amp; Care
                    </a>
                    <a
                      className="block p-2 rounded-xs hover:text-slate-800 hover:bg-slate-100 relative group"
                      href="/en/custom-packaging-boxes-technology-products"
                    >
                      Technology
                    </a>
                    <a
                      className="block p-2 rounded-xs hover:text-slate-800 hover:bg-slate-100 relative group"
                      href="/en/packaging-for-marketing-and-promotion-activities-gadgets"
                    >
                      Marketing
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center rounded-xs font-medium hover:bg-slate-100 transition-all duration-100 group cursor-pointer relative">
                <a
                  className="p-2 hover:text-slate-800"
                  href="/en/packaging-design-application-subscriptions-plans"
                >
                  Plans
                </a>
              </li>
              <li className="flex items-center rounded-xs font-medium hover:bg-slate-100 transition-all duration-100 group cursor-pointer relative">
                <a
                  className="p-2 hover:text-slate-800"
                  href="/en/packaging-sample-kits"
                >
                  Sample Kits
                </a>
              </li>
              <li className="flex items-center rounded-xs font-medium hover:bg-slate-100 transition-all duration-100 group cursor-pointer relative">
                <a className="p-2 hover:text-slate-800" href="/en/contacts">
                  Support
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 relative">
              <ul className="hidden md:flex gap-2 items-center">
                <li className="flex items-center rounded-xs font-medium hover:bg-slate-100 transition-all duration-100 group cursor-pointer">
                  <a
                    className="p-2 group-hover:text-slate-800"
                    href="/login?lang=en"
                  >
                    Login
                  </a>
                </li>
                <li className="flex items-center rounded-xs font-medium hover:bg-slate-100  transition-all duration-100 group cursor-pointer">
                  <a
                    className="p-2 group-hover:text-slate-800"
                    href="/signup?lang=en"
                  >
                    Signup
                  </a>
                </li>
              </ul>
              <a href="/select-box/en/dieline-boxes">
                <button className="btn btn-filled bnt-small">Create</button>
              </a>
              <button
                onClick={() => setOpenMenu(!openMenu)}
                title="Menu"
                role="button"
                aria-label="menu"
                aria-pressed="false"
                className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xs xl:hidden focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="fill-slate-500"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
              <div
                className={`${
                  !openMenu && 'hidden'
                } absolute top-16 right-0 z-10`}
              >
                <ul className="w-64 bg-white p-4 rounded-sm space-y-4 shadow-soft-48">
                  <li className="font-medium cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <span>Features</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="font-medium cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <span>Categories</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="font-medium cursor-pointer">
                    <a href="/en/packaging-design-application-subscriptions-plans">
                      Plans
                    </a>
                  </li>
                  <li className="font-medium cursor-pointer">
                    <a href="/en/packaging-sample-kits">Sample Kits</a>
                  </li>
                  <li className="font-medium cursor-pointer">
                    <a href="/en/contacts">Support</a>
                  </li>
                  <li className="md:hidden bg-slate-100/50 h-[2px] w-full"></li>
                  <li className="md:hidden font-medium">
                    <a
                      href="/login?lang=en"
                      className="flex gap-2 items-center"
                    >
                      Login
                    </a>
                  </li>
                  <li className="md:hidden font-medium">
                    <a
                      href="/signup?lang=en"
                      className="flex gap-2 items-center"
                    >
                      Signup
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
