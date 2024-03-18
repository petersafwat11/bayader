import Link from 'next/link';
import React from 'react';

function Software() {
  return (
    <div>
      <span className="font-semibold xl:text-xl lg:text-lg text-base text-white">
        Software
      </span>
      <ul>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/how-to-create-packaging-graphic-files"
          >
            How-to
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/vector-die-cut-templates-generator"
          >
            Die-cut templates
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/online-3d-packaging-mockup-service"
          >
            Virtual 3D models
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/packaging-design-application-subscriptions-plans"
          >
            Plans
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Software;
