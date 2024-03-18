import Link from 'next/link';
import React from 'react';

function Support() {
  return (
    <div>
      <span className="font-semibold xl:text-xl lg:text-lg text-base text-white">
        Support
      </span>
      <ul>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/contacts"
          >
            Contact us
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="https://blog.pack.ly/en/learning-eng"
          >
            E-Learning
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="https://help.pack.ly/en"
          >
            Help center
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="https://help.pack.ly/en/kb/download"
          >
            Free tools
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Support;
