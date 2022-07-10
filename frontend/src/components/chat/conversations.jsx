import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import "./conv.css"

export default function Conversations({conversation}) {
  const currentUser = Cookies.get("currentUser");
  const [friend, setFriend] = useState({})
  const [profile, setProfile] = useState({})

  const token = Cookies.get("token")
  useEffect(()=>{
    const friendId = conversation.members.find(m => m !== currentUser)

    const getUser = async ()=>{
      const api = await fetch(`http://localhost:4001/getUser/${friendId}`, {
        method: "GET", 
        headers: {
          Authorization : "Bearer " + token
        }
      })
      const data = await api.json()
      setFriend(data.user)
      setProfile(data.profile)
    }
    getUser()
  }, [])
  return (
    <div className="conversation">
      <img src={profile ? profile.image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="" className="conversationImg" />
      <span id="name">{friend.userName}</span>
    </div>
  );
}
