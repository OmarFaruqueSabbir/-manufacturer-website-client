import { Transition } from '@headlessui/react';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/tool.png'
import LinkCustom from '../../../LinkCustom/LinkCustom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <nav className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">



                    <div className="flex items-center flex-shrink-0">
                        <Link to='/home'>
                            <img
                                className="h-9 w-9"
                                src={logo}
                                alt="Workflow"
                            />
                        </Link>


                        <h1 className="text-white text-2xl font-mono "> National Tools</h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <LinkCustom
                                to='/home'
                                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                HOME
                            </LinkCustom>

                            <LinkCustom
                                to='/portfolio'
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                PORTFOLIO
                            </LinkCustom>

                            <LinkCustom
                                to='/dashboard'
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                DASHBOARD
                            </LinkCustom>

                            <LinkCustom
                                to='/blogs'
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                BLOGS
                            </LinkCustom>

                            {
                                user ?
                                    <>
                                        <p className='text-orange-400 text-xl'>{user.displayName}</p>

                                        <button className='bg-orange-500 p-2 rounded text-white' onClick={handleSignOut}>signOut</button>

                                    </>

                                    :
                                    <LinkCustom
                                        to='/login'
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        LOGIN
                                    </LinkCustom>
                            }
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className="navbar-start">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">

                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <LinkCustom
                                to='/home'
                                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                HOME
                            </LinkCustom>

                            <LinkCustom
                                to='/reviews'
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                REVIEWS
                            </LinkCustom>

                            <LinkCustom
                                to="/dashboard"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                DASHBOARD
                            </LinkCustom>

                            <LinkCustom
                                to='/blogs'
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                BLOGS
                            </LinkCustom>

                            {
                                user ?
                                    <>
                                        <p className='text-orange-400 text-xl'>{user.displayName}</p>
                                        <button className='bg-orange-500 p-2 rounded text-white' onClick={handleSignOut}>signOut</button>

                                    </>

                                    :
                                    <LinkCustom
                                        to='/login'
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        LOGIN
                                    </LinkCustom>
                            }
                        </div>
                    </div>
                )}

            </Transition>

        </nav>
    );
}

export default Navbar;