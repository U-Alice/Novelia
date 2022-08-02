import { useState } from "react";
import Navbar from "../home/navbar";
import "./publish.css";

function Publish() {
  const [data, setData] = useState({
    name:"",
    author:"", 
    
  })


  const handleSubmit = async ()=>{
    const api = await fetch("http:localhost:4001/uploadBook", {
      method:"POST", 
      "content-Type":"application/json",
      body: JSON.stringify(data)
    })
  }
  return (
    <div className="publish">
      <Navbar />
      <div className="publishMain">
        <div className="publishLeft">
          <img
            src="https://images.unsplash.com/photo-1526395050546-dc5b0fe8df5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <form action="">
          <h6>Publish your own novel</h6>
          <label htmlFor="">Book Title</label>
          <input type="text" />
          <label htmlFor="">Name Of The Author</label>
          <input type="text" />
          <select name="category" id="category">
            <option value="Romance">Romance</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="non-fictional">Non-fictional</option>
            <option value="fantasy">Fantasy</option>
          </select>
          <label htmlFor="" className>
            Upload Book{" "}
          </label>
          <input type="file" className="file" />
          <label htmlFor="">Upload Book</label>
          <label htmlFor="">Add Cover</label>
          <input type="file" className="file" />
          <label htmlFor="">Upload File</label>
          <label htmlFor="">Description</label>
          <input type="text"></input>
          <button id="publish">Publish</button>
        </form>
      </div>
    </div>
  );
}
export default Publish;
