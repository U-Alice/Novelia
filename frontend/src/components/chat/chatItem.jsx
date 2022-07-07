function ChatItem ({socket, room , username}){
    return (
        <div>   
        <div className="chat-header">
            <p>live Chat</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-footer">
            <input type="text" placeholder="Hey.." />
            <button>&#9658;</button>
        </div>
        </div>
    )
}
export default ChatItem;