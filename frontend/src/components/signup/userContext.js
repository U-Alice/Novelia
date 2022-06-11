import { createContext } from "react";
import { useInRouterContext } from "react-router-dom";


const getUser = async ()=>{
    const api = await fetch("localhost:4001/register", {
        method: 'POST', 
        headers:{
            "content-Type": 'application/json',
        },
        body: JSON.stringify(data)
    })
    const data = api.json()

}

const UserContext = createContext(null)
export default UserContext; 