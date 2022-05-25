import React from 'react';

const Portfolio = () => {
    return (
        <div>

            <section className="bg-white dark:bg-gray-800">
                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg w-full mt-8 bg-transparent border rounded-md px-7 py-2 dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                            <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                My PortFolio
                            </h1>

                            <div className="mt-8 space-y-5">
                                <div className='flex flex-col'>
                                    <h1 className="mx-2 text-left"> <span className='font-bold '>Name :</span>   Omar Faruque</h1>
                                    <h1 className="mx-2 text-left"> <span className='font-bold '>Email :</span>   omar.cloud09@gmail.com</h1>
                                    <h1 className="mx-2 text-left"> <span className='font-bold '>Education :</span> International Islamic University Chittagong </h1>
                                </div>
                                <div>
                                    <h1 className="mx-2 text-left"> <span className='font-bold '>Skills :</span> </h1>
                                </div>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">HTML, Vanilla-CSS, Bootstrap &Tailwind CSS Frameworks </span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Basic JavaScript, JS ES6, REACT JS Library</span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Express JS, Node JS & MongoDB </span>
                                </p>
                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">FireBase, Heroku & Netlify </span>
                                </p>

                                <h1 className="mx-2 text-left"> <span className='font-bold  '>Project Links :</span> </h1>
                                <a href='https://warehouse-management-34b7d.web.app/'>
                                    <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
                                        Project 1
                                    </button>
                                </a>

                                <a href='https://product-analysis-website-omarfaruquesabbir.netlify.app'>
                                    <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
                                        Project 2
                                    </button>
                                </a>

                                <a href='https://independent-service-prov-d4233.web.app/'>
                                    <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
                                        Project 3
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://i.ibb.co/S0fx49y/IMG-20200111-154516.jpg" alt='' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;