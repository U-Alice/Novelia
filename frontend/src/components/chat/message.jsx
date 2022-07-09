import "./message.css";

export default function Message({ own }) {
  return (
    <div>
      <div className={own ? "message own" : "message"}>
     
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="messageImg"
          />
          <p className="messageText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            facere error eaque, a cupiditate, voluptatum eum sunt ab, hic
            perspiciatis magnam accusamus nisi consequuntur ipsum veniam? Amet
            vel voluptate laboriosam
          </p>
        </div>
        <div className="messageBottom">1hour ago</div>
    </div>
  );
}
