import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-7">
                        <h1 className="sm:text-3xl text-4xl font-bold title-font text-gray-900">Blog Section</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <h2 className="text-orange-500 text-left text-lg title-font font-medium">How will you improve the performance of a React Application?</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-justify">When it's necessary, user should keep component state local. To avoid unwanted re-renders, memorize React components.React code splitting with dynamic import() Windowing or list virtualization.In React, lazy image loading is possible. </p>
                                    <a className="mt-3 text-orange-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <h2 className="text-orange-500 text-lg title-font font-medium text-left">What are the different ways to manage a state in a React application?</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-justify">In a React application, there are a number different approaches to maintain state. One option is to make use of React's built-in state management. This is commonly accomplished by utilizing the constructor function to create a React component instance, and then storing the state information in the this.state property.Using a third-party library like Redux or MobX to manage state is another option.  </p>
                                    <a className="mt-3 text-orange-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <h2 className="text-orange-500 text-left text-lg title-font font-medium">How does prototypical inheritance work?</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-justify">The ability to access object properties from another object is known as prototype inheritance. To add new properties and methods to an existing object constructor, we utilize a JavaScript prototype. Through a reference pointer function, prototypical inheritance allows us to reuse properties or methods from one JavaScript object to another. </p>
                                    <a className="mt-3 text-orange-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    
                                    <h2 className="text-orange-500 text-lg title-font font-medium text-left">Why you do not set the state directly in React.</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-justify">If we update it immediately, the update you made may be overwritten if we execute setState() later.
                                    This.state does not change promptly when we directly update the state. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function. You'll lose control of the state in all of your components. </p>
                                    <a className="mt-3 text-orange-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <h2 className="text-orange-500 text-lg title-font font-medium text-left">What is a unit test? Why should write unit tests?</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-justify">Unit tests are automated tests designed and executed by software engineers to confirm that a piece of an application matches its design and operates as intended. Before any code is deployed, it is subjected to unit testing to ensure that it fulfills quality criteria. This promotes a dependable engineering environment that prioritizes quality. Unit testing saves time and money during the product development life cycle, and it helps developers design better, more efficient code. </p>
                                    <a className="mt-3 text-orange-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;