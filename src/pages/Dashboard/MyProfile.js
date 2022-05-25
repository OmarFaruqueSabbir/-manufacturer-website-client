import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {const [infos, setInfos] = useState([])
    console.log(infos)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profiles?user=${user.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res',res)
                    if(res.status === 401 || res.status === 403){
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setInfos(data)
                });
        }
    }, [user])

    // const deleteItem = id => {
    //     const agree =   window.confirm('Want to delete Items?');
    //     if (agree) {
    //         const url = `http://localhost:5000/order/${id}`
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 const remaining = orders.filter(order => order._id !== id);
    //                 setOrders(remaining);
    //             })
    //     }
    // }
    return (
        <div>
            <h2>Infos: {infos?.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            
                            <th>User</th>
                            {/* <th>UserMail</th> */}
                            <th>Education</th>
                            <th>LinkedIn Profile</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            infos.map((info,index) =>
                                <tr className='hover' key={info._id}>
                                <td>{info.userName}</td>
                                {/* <td>{info.user}</td> */}
                                <td>{info.education}</td>
                                <td>{info.linkedIn}</td>
                                <td>{info.location}</td>
                                <td>{info.phone}</td>
                                {/* <td><button onClick={() => deleteItem(order._id)} className='btn bg-red-600' >Delete</button></td> */}
                                <td><button className='btn btn-success px-5'>Update</button> 
                                {/* <td> <Link to={`/dashboard/payment/${info._id}`}> <button className='btn btn-success px-5'>Pay</button> </Link>  */}
                                
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;