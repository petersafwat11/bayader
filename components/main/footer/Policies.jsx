import Link from 'next/link';
import React from 'react';

function Policies() {
  return (
    <div>
      <span className="font-semibold xl:text-xl lg:text-lg text-base text-white">
        Policies
      </span>
      <ul>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/cookie-policy"
          >
            Cookie policy
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/privacy-policy"
          >
            Privacy policy
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/service-terms"
          >
            Terms of service
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Policies;
