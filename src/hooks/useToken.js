import { useEffect, useState } from "react"

const useToken = user =>{
    const [token,setToken] = useState("")
    useEffect(()=>{
        const email = user?.user?.email
        const userNow = {email: email}
        if(email){
            fetch(`https://frozen-river-30466.herokuapp.com/user/${email}`,{
                method: 'PUT',
                headers: {'content-type' : 'application/json'},
                body:JSON.stringify(userNow)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken', data)
                const accessToken = data.token;
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken)
            })
        }
    },[user])
    return [token]
}
export default useToken;