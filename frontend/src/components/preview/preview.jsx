import Cookies from "js-cookie";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bottom from "../landingPage/bottom";
import Navbar from "../home/navbar";
import "./preview.css";
import {Link} from "react-router-dom";
function Preview() {
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  const Navigate = useNavigate("")
  let query = useQuery();
  console.log(query.get("id"));
  const [book, setBook] = useState({});
  const token = Cookies.get("token");
  async function getBook() {
    setBook({});
    const api = await fetch(
      `https://novelia.herokuapp.com/getBook/${query.get("id")}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await api.json();
    setBook(data.book);
    console.log(book._id);
  }
  
  const addBook = async (e)=>{
    Cookies.get("token")
    const api =await fetch(`https://novelia.herokuapp.com/newList/${e.target.value}`, {
      method: "POST", 

      headers:{
        "Content-Type":"application/json",
        Authorization : "Bearer " + Cookies.get("token")
      }
    })
    const data = await api.json()
    console.log(data)
  }

  useEffect(() => {
    getBook();
  }, []);
  return (
    <div className="preview">
      <Navbar />
      <div className="summary">
        <img
          src={book.imgUrl}
          alt=""
        />
        <div className="summaryDesc">
          <h4>
            {book.title}
          </h4>
          <h6>{book.author}</h6>
          <div>
            <h1>Summary</h1>
            <p>{book.description}</p>
          </div>
          <div className="details">
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>title</p>
            </div>
            <div>
              <p>price</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <div>
              <button onClick={addBook} value={book._id}>add to read List</button>
            </div>
          </div>
        </div>
      </div>
      <Bottom/>
    </div>
  );
}
export default Preview;
