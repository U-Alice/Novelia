import "./chatOnline.css";

export default function ChatOnline(){
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
              <div className="chatOnlineImgContainer">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
                <div className="chatOnlineBadge"></div>
              </div>
              <span className="chatOnlineName">John Doe</span>
            </div>
        </div>
    )
}