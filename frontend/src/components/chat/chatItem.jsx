import { useState } from "react";

function ChatItem({ socket, room, username }) {
  const [currentMessage, setCurrentMessage] = useState();
  const sendMessage = async() => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours()
        
      };
      console.log(messageData)
      await socket.emit("send_message", messageData)
    }
  };
  return (
    <div>
      <div className="chat-header">
        <p>live Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey.."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}
export default ChatItem;
