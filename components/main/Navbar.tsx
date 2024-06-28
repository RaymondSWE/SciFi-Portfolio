'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#Timeline', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
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
    <nav className="flex flex-row w-full py-6 md:py-6">
      <Image
        src="/main.svg"
        alt="background gradient image"
        fill
        className="z-[-10] object-cover opacity-70"
      />
      <div         className={`fixed w-full flex justify-center px-8 z-50 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-80'
        }`}>
      <div className="flex justify-center w-full bg-[#03001442] border border-[#7042f861] backdrop-blur-xl rounded-full text-gray-200 px-2 py-3 space-x-2 md:space-x-4 z-50 md:max-w-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white md:text-lg text-xs transition duration-300 hover:text-gray-400 borderBottom"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
