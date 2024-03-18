import Link from 'next/link';
import React from 'react';

function Printing() {
  return (
    <div>
      <span className="font-semibold xl:text-xl lg:text-lg text-base text-white">
        Printing
      </span>
      <ul>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/how-to-create-packaging-printing-files"
          >
            How it works
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/online-custom-box-printing-service"
          >
            Custom packaging
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/packaging-sample-kits"
          >
            Sample kits
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/custom-printed-boxes-pricing"
          >
            Real-time quote
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="https://www.pack.ly/box/en/best-price-guarantee-packaging"
          >
            Best Price guarantee
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Printing;
