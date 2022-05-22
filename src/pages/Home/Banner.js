import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="h-screen overflow-hidden">
                <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
                    backgroundPosition: "100%", backgroundImage: "url('https://img.freepik.com/free-photo/arrangement-yellow-tools-top-view-with-copy-space_23-2148393100.jpg?t=st=1653189696~exp=1653190296~hmac=0add1e82400f52750c8e9cdae17bd93fab7bbe24be437933c8f52570f4ab7a85&w=740')",
                    height: "580px"
                }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}>
                        <div className="flex justify-center items-center h-full">
                            <div className="text-center text-white px-6 md:px-12">
                                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best tools on the market <br /><span className='text-orange-500'>for your business</span></h1>
                                <a className="inline-block px-7 py-3 mr-1.5 border-2 border-orange text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                                <a className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}

        </div>

    );
};

export default Banner;