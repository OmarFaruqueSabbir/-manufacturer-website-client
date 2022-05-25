import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';


const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return (
        <div>
            <h2 style={{ fontFamily: "poppins" }} className='text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mt-5 pt-5'>Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                {
                    tools?.map((tool) => (
                        <Tool key={tool._id} tool={tool}>
                        </Tool>)
                    )
                }
            </div>
        </div>
    );
};

export default Tools;