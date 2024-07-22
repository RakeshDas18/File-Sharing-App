"use client";
import { useState, useEffect, useRef } from 'react';
import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SideNav from './SideNav'; // Adjust the import based on your file structure

function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end h-[64px]'>
      <AlignJustify className='md:hidden cursor-pointer' onClick={toggleSidebar} />
      <Link href='/' passHref>
        <Image src='/logo.svg' width={50} height={50} className='md:hidden cursor-pointer' alt='Logo' />
      </Link>
      <UserButton />

      {/* Sidebar with animation */}
      <div 
        ref={sidebarRef} 
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-md z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {isOpen && <SideNav onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}

export default TopHeader;
