import React from 'react';
import Header from '../_components/Header'

function About() {
    return (
        <div>
            <Header />
            <section className="bg-gray-900 text-white h-screen">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="w-full">
                        <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>

                        <p className="mt-4 text-gray-300">
                        Welcome to our Secure Share, where simplicity meets security. Founded by Rakesh Das, our mission is to revolutionize the way people share and collaborate on digital content.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Our Vision</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                At Secure Share, we envision a world where sharing files is seamless and secure, empowering individuals and businesses to collaborate effortlessly across borders and time zones.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Why Choose Us?</h2>

                                <ul className="list-disc list-inside mt-1 text-sm text-gray-300">
                                    <li>Security First: We prioritize your data security with state-of-the-art encryption and robust privacy measures.</li>
                                    <li>User-Centric Design: Our platform is designed with you in mind, ensuring a smooth and intuitive experience.</li>
                                    <li>Reliability: Count on us for fast and reliable file transfers, backed by cutting-edge technology.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Get in Touch</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                We're always eager to hear from you. Whether you have feedback, questions, or just want to say hello, don't hesitate to reach out. Together, let's unlock the power of seamless collaboration through Secure Share.
                                Thank you for choosing Secure Share for your file sharing needs!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
