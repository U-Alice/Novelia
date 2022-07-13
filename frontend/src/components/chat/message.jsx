import "./message.css";


export default function Message({ own, message }) {
  return (
    <div>
      <div className={own ? "message own" : "message"}>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="messageImg"
        />
        <p className="messageText">{message.text}</p>
        <p className="messageBottom">{message.createdAt}</p>
      </div>
    </div>
  );
}
