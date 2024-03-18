import Link from 'next/link';
import React from 'react';

function About() {
  return (
    <div>
      <span className="font-semibold xl:text-xl lg:text-lg text-base text-white">
        About
      </span>
      <ul>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/team-members"
          >
            Teams
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/box/en/career"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="/en/sponsorship-collaborations"
          >
            Sponsorship
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-50 text-xs hover:text-primary-400 xl:text-sm transition-all duration-300"
            href="https://news.pack.ly/en"
          >
            Newsroom
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
