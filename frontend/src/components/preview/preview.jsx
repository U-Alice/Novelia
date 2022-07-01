import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../home/navbar";
import "./preview.css";
function Preview() {
  const [book , setBook] = useState({})
  const token = Cookies.get("token");
  async function getBook(){
    const api = await fetch(`localhost:4001/getBooks/id`, {
      method:"GET",
      headers:{
        Authorization: "Bearer " + token
      }
    })
    const data = await api.json();
    setBook(data.book)
  }
  useEffect(()=>{
    getBook()
  })
  return (
    <div className="preview">
      <Navbar />
      <div className="summary">
        <img
          src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="summaryDesc">
          <h4>{book.title}</h4>
          <h6>{book.Author}</h6>
          <div>
            <h1>Summary</h1>
            <p>
              {book.description}
            </p>
          </div>
          <div className="details">
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Preview;
