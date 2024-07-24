import React from 'react';
import Constant from '../_utils/Constant';

const Hero = () => {
    return (
        <section className="bg-gray-900 text-white h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="text-3xl font-extrabold sm:text-5xl"
                        style={{ color: '#6EE7B7' }}
                    >
                        Upload, Save And Easily Share Your Files In One Place
                        <span className="sm:block"> Increase Conversion. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        {Constant.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition duration-300 ease-in-out"
                            href="/upload"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500 sm:w-auto transition duration-300 ease-in-out"
                            href="/about"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
