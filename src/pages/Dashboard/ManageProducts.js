import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const deleteItem = id => {
        const agree = window.confirm('Want to delete Tools?');
        if (agree) {
            const url = `http://localhost:5000/tools/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = tools.filter(order => order._id !== id);
                    setTools(remaining);
                })
        }
    }
    return (
        <div>
            <h3 className='text-3xl  mt-5 mb-5 font-medium'>Manage All Products</h3>
            <div className="overflow-x-auto">
                {
                    tools.length > 0 ?
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>ToolId</th>
                                    <th>Tool</th>
                                    <th>Tool-Img</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tools?.map((tool, index) =>
                                        <tr className='hover' key={tool._id}>
                                            <th>{index + 1}</th>
                                            <td>{tool._id}</td>
                                            <td>{tool.name}</td>
                                            <td><img className='h-20 w-20' src={tool.img} alt="" /></td>
                                            <td onClick={() => deleteItem(tool._id)}><button className="font-medium text-red-500 dark:text-red-600 hover:underline">Delete</button></td>

                                        </tr>)
                                }

                            </tbody>
                        </table>
                        :
                        <></>

                }

            </div>
        </div>
    );
};

export default ManageProducts;