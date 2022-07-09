import { useState } from "react";
import io from "socket.io-client";
import ChatItem from "./chatItem";
import "./chat.css";
function Chat() {
  const socket = io.connect("http://localhost:4002");
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div>
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
    </div>
  );
}
export default Chat;
