"use client";
import { Shield, Upload, File } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function SideNav({ onClose }) {
    const menuList = [
        {
            id: 1,
            name: "Upload",
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: "Files",
            icon: File,
            path: '/files'
        },
        {
            id: 3,
            name: "Upgrade",
            icon: Shield,
            path: '/upgrade'
        }
    ];

    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const currentPath = router.pathname;
        const currentIndex = menuList.findIndex(item => item.path === currentPath);
        if (currentIndex !== -1) {
            setActiveIndex(currentIndex);
        }
    }, [router.pathname]);

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b flex items-center justify-between'>
                {/* Conditionally render the logo or close button */}
                <div className="md:hidden">
                    <button onClick={onClose} className='text-gray-500'>
                        Close
                    </button>
                </div>
                <div className='hidden md:block'>
                    <Image src='logo.svg' width={80} height={80} />
                </div>
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item, index) => {
                    const isActive = activeIndex === index || router.pathname === item.path;
                    return (
                        <Link key={item.id} href={item.path} passHref>
                            <button
                                className={`flex gap-2 p-4 px-6 w-full text-gray-500 
                                ${isActive ? 'bg-blue-200 text-black hover:bg-blue-100' : 'hover:bg-blue-100'}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <item.icon />
                                <h2>{item.name}</h2>
                            </button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default SideNav;