import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import Navbar from "../home/navbar";
import LoadingSpinner from "../spinner/spinner";
import "./publish.css";

function Publish() {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: ""
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [response , setResponse ] =  useState("")
  const [selectedFile, setSelectedFile] = useState({});
  const [isLoading, setLoading] = useState(false) 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    formData.append("author", data.author);
    formData.append("title", data.title);
    formData.append("Description", data.description);
    const responseT = await axios.post("https://novelia.herokuapp.com/uploadBook", formData, {
      headers:{
        Authorization: "Bearer " + Cookies.get("token")
      }
    });
    console.log(responseT)
    setResponse(responseT.data.message)
    setLoading(false)
  };
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
        <form action="" onSubmit={handleSubmit}>
          <h6>Publish your own novel</h6>
        {isLoading ? <LoadingSpinner/> :<h3 id="signup">SIGN UP</h3>}

          <label htmlFor="">Book Title</label>
          <input type="text" onChange={handleChange} name ="title" required/>
          <label htmlFor="">Name Of The Author</label>
          <input type="text" name="author" onChange={handleChange} required/>
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
          <input
            type="file"
            className="file"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
              console.log(selectedFile);
            }}
          required/>
          <label htmlFor="">Add Cover</label>
          <input type="file" className="file" />
          {/* <input type="text" /> */}
          <label htmlFor="">Description</label>
          <input type="text" onChange={handleChange} name = "description" required></input>
          <button id="publish" type="submit">
            Publish
          </button>
          <p>{response}</p>
        </form>
      </div>
    </div>
  );
}
export default Publish;
