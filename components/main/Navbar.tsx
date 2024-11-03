'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StarsCanvas from '@/components/main/StarBackground';
import { StarIcon, NoSymbolIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#career-timeline', label: 'Career Path' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showStars, setShowStars] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="flex flex-row w-full py-6">
        <div
          className={`fixed w-full flex justify-center px-3 z-50 transition-transform duration-300 ${
            showNavbar ? 'translate-y-0' : '-translate-y-80'
          }`}
        >
          <div
            className="flex justify-center w-full bg-[#03001442] backdrop-blur-lg border border-gray-800 rounded-2xl py-4 
        space-x-3 md:space-x-8 z-50 md:max-w-2xl sm:max-w-lg sm:space-x-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white sm:text-base md:text-base lg:text-lg text-xs transition duration-300 hover:text-gray-400 borderBottom"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setShowStars(!showStars)}
              className="text-white transition duration-300 hover:text-gray-400 borderBottom"
            >
              {showStars ? (
                <StarIcon
                  className="h-4 w-4 sm:w-6 sm:h-6 text-white"
                  aria-hidden="true"
                />
              ) : (
                <NoSymbolIcon
                  className="h-4 w-4 sm:w-6 sm:h-6 text-white"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
      <StarsCanvas show={showStars} />
    </>
  );
};

export default Navbar;
