import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 border-b border-gray-800">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-400 dark:text-teal-400" href="/">
                            <span className="sr-only">Home</span>
                            <Image src='/logo.svg' width={75} height={25} />
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-gray-300 transition-colors duration-300 hover:text-gray-200"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-300 transition-colors duration-300 hover:text-gray-200"
                                        href="/upload"
                                    >
                                        Upload
                                    </a>
                                </li>

                                <li>
                                    <Link href='/about' className='text-gray-300 transition-colors duration-300 hover:text-gray-200'>
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-300 transition-colors duration-300 hover:text-gray-200"
                                        href="/contact"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-teal-400 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-500 transition-colors duration-300"
                                    href="/upload"
                                >
                                    Get Started
                                </a>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-800 p-2 text-gray-300 transition-colors duration-300 hover:text-gray-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
