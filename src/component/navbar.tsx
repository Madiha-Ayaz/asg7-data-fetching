"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "black", height: "80px", color: "yellow" }}
      className="bg-black text-white px-6 py-5"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <ul className="flex gap-8 hidden md:flex space-x-4 text-yellow-200">
          <li>
            <Link href="/" className="hover:underline text-2xl  font-bold">Home</Link>
          </li>
          <li>
            <Link href="/Client-data-fetching" className="hover:underline text-2xl font-bold">Client Side</Link>
          </li>
          <li>
            <Link href="/Server-fetch" className="hover:underline text-2xl font-bold">Server Side</Link>
          </li>
        </ul>

        {/* Hamburger Button for Mobile */}
        <button
  className="md:hidden focus:outline-none"
  onClick={() => setIsOpen(!isOpen)} // Toggle state
>
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
    />
  </svg>
</button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white px-4 py-2 space-y-2">
          <li><Link href="/" className="block hover:underline text-xl">Home</Link></li>
          <li><Link href="/Client-data-fetching" className="block hover:underline text-xl">Client Fetch</Link></li>
          <li><Link href="/Server-fetch" className="block hover:underline text-xl">Server Fetch</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
