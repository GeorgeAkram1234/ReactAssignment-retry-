import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <nav className='bg-slate-700 text-white overflow-x-hidden uppercase font-bold fixed top-0 right-0 left-0 z-50'>
                <div className="md:container mx-auto flex justify-between items-center px-20 py-2 m-8">
                    <div className='text-xl lg:text-3xl'>
                        <Link to="/">Start Framework</Link>
                    </div>
                    <div className='lg:flex hidden justify-between '>
                        <ul className='flex gap-6 '>
                            <li >
                                <NavLink to="/about">about</NavLink>
                            </li>
                            <li >
                                <NavLink to="/portfolio">portfolio</NavLink>
                            </li>
                            <li >
                                <NavLink to="/contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:block lg:hidden cursor-pointer " onClick={toggleSidebar}>
                        {sidebarOpen ? (
                            <i className='fa-2x fas fa-times'></i>
                        ) : (
                            <i className='fa-2x fas fa-bars'></i>
                        )}
                    </div>
                </div>
                <div className={`sidebar p-5 ${sidebarOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col gap-6 container w-75 mx-auto'>
                        <li>
                            <NavLink to="/about" onClick={toggleSidebar}>about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" onClick={toggleSidebar}>portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={toggleSidebar}>contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
