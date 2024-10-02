import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LogoFooter from '../assets/logo-lans.png';
import Logo from '../assets/weducost-pot.png';

function PageTemplate() {
    return (
        <>
            <nav className="bg-white border-b-2 flex justify-between items-center sticky top-0 ">
                <div className="container mx-auto">
                    <ul className="flex items-center space-x-4">
                        <img src={Logo} alt="Logo" className="h-24 mr-2 " />
                        <li>
                            <Link to="/" className="text-black hover:text-orange-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/calc" className="text-black hover:text-orange-400">Calculator</Link>
                        </li>
                        <li>
                            <Link to="/dana" className="text-black hover:text-orange-400">Cari Dana</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex space-x-4">
                    <Link to="/logout" className="bg-white text-orange-400 px-3 py-1 rounded hover:bg-black mr-2 border">
                        LogOut
                    </Link>
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
    )
}

export default PageTemplate;