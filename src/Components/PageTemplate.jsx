import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/logo-lans.png';
import LogoFooter from '../assets/weducost-pot.png';

function PageTemplate() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-white border-b-2 flex justify-between items-center sticky top-0">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo" className=" h-20 mx-4" />
                        <ul className="hidden md:flex items-center space-x-4">
                            <li>
                                <Link to="/home" className="text-black hover:text-orange-400">Home</Link>
                            </li>
                            <li>
                                <Link to="/calc" className="text-black hover:text-orange-400">Calculator</Link>
                            </li>
                            <li>
                                <Link to="/dana" className="text-black hover:text-orange-400">Cari Dana</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <button className="flex space-x-4">
                        <Link to="/login" className="bg-white text-orange-400 px-3 py-1 rounded hover:bg-black mr-2 border">
                            Log Out
                        </Link>
                    </button>
                </div>

                {/* Menu Mobile */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t-2`}>
                    <ul className="flex flex-col items-center space-y-2 p-4">
                        <li>
                            <Link to="/home" className="text-black hover:text-orange-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/calc" className="text-black hover:text-orange-400">Calculator</Link>
                        </li>
                        <li>
                            <Link to="/dana" className="text-black hover:text-orange-400">Cari Dana</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />

            <footer className="bg-black p-1 flex items-end">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={LogoFooter} alt="Logo" className="h-10 mr-2" />
                    </div>
                    <div className="flex space-x-4">
                        <p className="text-gray-400 hover:text-orange-400">About</p>
                        <p className="text-gray-400 hover:text-orange-400">Service</p>
                        <p className="text-gray-400 hover:text-orange-400">Contact</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default PageTemplate;
