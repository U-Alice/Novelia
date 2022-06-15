import { useState } from "react";

const [user, setUser] = useState(null);
function getUser(){
    await fetch("/api/user", {
        
    })
}