import React from 'react';


const UserRow = ({user,refetch,index}) => {
    const {email,role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
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
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>
        {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
        </td>
      </tr>
    );
};

export default UserRow;