import { useState } from "react";
import io from "socket.io-client";
import ChatItem from "./chatItem";
import  {React} from "react";
import "./chat.css";
import Conversations from "./conversations";
import Message from "./message";
function Chat() {
  const socket = io.connect("http://localhost:4002");
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div>
      <div className="messenger">
         <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input type="text" placeholder="Search for friends" className = "chatMenuInput"/>
            <Conversations/>
            <Conversations/>
            <Conversations/>
            <Conversations/>
            <Conversations/>
            <Conversations/>
            <Conversations/>
            <Conversations/>

          </div>
         </div>
         <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">

              <Message/>
              <Message own={true}/>
              <Message/>
              <Message own={true}/>
              <Message own={true}/>
              <Message/>
              <Message own={true}/>
              <Message own={true}/>
              <Message/>
              <Message/>
              <Message/>
              <Message own={true}/>
              <Message/>
              <Message/>

            </div>
            <div className="chatBoxBottom">
              <input type="text" placeholder="Type your text...." />
              <span ><button>&#9658;</button></span>
            </div>
          </div>
         </div>
         <div className="chatOnline">
          <div className="onlineWra">online</div>
         </div>
      </div>
      {/* <div>
        {!showChat ? (
          <div className="joinChatContainer">
            <h1>Join A chat</h1>
            Name{" "}
            <input
              type="text"
              placeholder="john.."
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            Name{" "}
            <input
              type="text"
              placeholder="Room Id.."
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <ChatItem socket={socket} username={user} room={room} />
        )}
      </div> */}
    </div>
  );
}
export default Chat;