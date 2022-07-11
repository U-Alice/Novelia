import { useContext, useState } from "react";
import io from "socket.io-client";
import { React } from "react";
import "./chat.css";
import Conversations from "./conversations";
import Message from "./message";
import ChatOnline from "./chatOnline";
// import { Cookie } from "js-cookie";
import { useEffect } from "react";
import { userContext } from "../userContext";
import Cookies from "js-cookie";
import { useRef } from "react";
function Chat() {
  // const socket = io.connect("http://localhost:4002");
  // const [user, setUser] = useState("");
  // const [room, setRoom] = useState("");
  // const [showChat, setShowChat] = useState(false);
  // const joinRoom = () => {
  //   if (user !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentConversation, setCurrentConv] = useState(null);
  const currentUser = Cookies.get("currentUser");
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef(io("ws://localhost:8900"));
  const scrollRef = useRef();
  useEffect(() => {
    socket.current.emit("addUser", currentUser)
    socket.current.on("getUsers", users => {
      console.log(users);
    })
  }, [currentUser]);
  const token = Cookies.get("token");
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await fetch(`http://localhost:4001/conversations`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await res.json();
        setConversations(data);
      } catch (err) {
        console.log(err);
      }
    };

    getConversations();
  }, [token]);
  useEffect(() => {
    const getMessages = async () => {
      const api = await fetch(
        `http://localhost:4001/messages/${currentConversation._id}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await api.json();
      setMessages(data);
    };
    getMessages();
  }, [currentConversation]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: currentUser,
      text: newMessage,
      conversationId: currentConversation._id,
    };
    try {
      const api = await fetch("http://localhost:4001/newMessage", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      const data = await api.json();
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "scroll" });
  }, [messages]);
  return (
    <div>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            {conversations.map((c) => {
              return (
                <div
                  onClick={() => {
                    setCurrentConv(c);
                  }}
                >
                  <Conversations conversation={c} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="chatBox">
          {currentConversation !== null ? (
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                {messages.map((m) => {
                  return (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === currentUser} />
                    </div>
                  );
                })}
              </div>
              <div className="chatBoxBottom">
                <input
                  type="text"
                  placeholder="Type your text...."
                  onChange={(e) => {
                    setNewMessage(e.target.value);
                  }}
                />
                <span>
                  <button onClick={handleSubmit}>&#9658;</button>
                </span>
              </div>
            </div>
          ) : (
            <div className="noConversation">
              Open a new Chat to start a conversation
            </div>
          )}
        </div>
        <div className="chatOnline">
          <div className="onlineWra">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
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
