'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

import { styles } from '../styles/styles.js';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

import { januszLogoNoBackground } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollTop = window.scrollY;
        if (scrollTop > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 'bg-primary' ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={januszLogoNoBackground}
            alt="logo"
            width={90}
            height={90}
            className="rounded-full"
          />
        </Link>

        {/* desktop navigation */}

        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-extralight cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <ScrollLink to={nav.id} smooth={true} duration={500}>
                  {nav.title}
                </ScrollLink>
              </li>
            );
          })}
        </ul>

        {/* mobile navigation */}

        <Link
          href="https://polish-tutor-online-blog.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-2 mx-6 text-white-700 font-extralight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500  rounded cursor-pointer"
        >
          Blog
        </Link>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <ScrollLink to={nav.id} smooth={true} duration={500}>
                    {nav.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
