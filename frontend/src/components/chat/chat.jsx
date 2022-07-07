import io from "socket.io-client";
function Chat(){
    const socket = io.connect("http://localhost:4002");
    return (
        <div>
            <h1>Join A chat</h1>
        Name <input type="text" /> 
        </div>
    )
}
export default Chat;