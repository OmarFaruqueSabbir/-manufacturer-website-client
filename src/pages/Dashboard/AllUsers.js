import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';


const AllUsers = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${user.email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                alert('failed to make an admin')
            }
            return res.json()})
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                alert(`Successfully made an admin`)
            }
        })

    }

    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                {

                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Designation</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                            users.map((user,index) =>
                                <tr className='hover' key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.email}</td>
                                <td>{user.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>}

            </div>
        </div>
    );
};

export default AllUsers;