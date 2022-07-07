import { useState } from "react";
import io from "socket.io-client";
import ChatItem from "./chatItem";
function Chat() {
  const socket = io.connect("http://localhost:4002");
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div>
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
      <ChatItem  socket={socket} username={user} room ={room}/>
    </div>
  );
}
export default Chat;
