import { useEffect } from "react";
import { useState } from "react";
import "./chat.css";
import ScrollToBottom from "react-scroll-to-bottom";
function ChatItem({ socket, room, username }) {
  const [currentMessage, setCurrentMessage] = useState();
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours(),
      };
      await socket.emit("send_message", messageData);
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      console.log(data);
    });
  }, [socket]);
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>live Chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((item) => {
          return (
            <div
              className="message"
              id={username === item.author ? "other" : "you"}
            >
              <div className="message-content">
                <p>{item.message}</p>
              </div>
              <div className="message-meta">
                <p id="time">{item.time}</p>
                <p id="author">{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type your message...."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}
export default ChatItem;
