import Cookies from "js-cookie";
import { useContext } from "react";
import { booksContext } from "../booksContext";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

function DisplayBooks() {
  
const {trendingBooks , romance, horror, scienceBooks, retrieveBooks} = useContext(booksContext);
const Navigate = useNavigate("")
const handlePreview = (e)=>{
  console.log(e.target.value)
  Navigate(`/preview${e.target.value}`)
}
useEffect(()=>{
  retrieveBooks()
}, [])
  return (
    <div className="books">
      <div className="heading">
        <h2>Trending Now</h2>
      </div>
      <div className="buttons">
        <button className="btn-left">&#8594;</button>
        <button className="btn-right">&#8592;</button>
      </div>
      <div className="list">
        {trendingBooks.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.imgUrl} alt="preview image" />
              </div>
              <div>
                <p>{item.title}</p> 
              </div>
                <button onClick={handlePreview} value={`?id=${item._id}`}>View Summary</button>
            </div>
          );
        })}
      </div>

      <div className="heading">
        <h2>Science</h2>
      </div>
      <div className="buttons">
        <button className="btn-left">&#8594;</button>
        <button className="btn-right">&#8592;</button>
      </div>
      <div className="list">
        {scienceBooks.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.cover} alt="preview image" />
              </div>
              <div>
                <p>{item.name}</p>
                <button onClick={handlePreview} value={`?name=${item.name}&author=${item.author}&imgUrl= ${item.cover}`}>View Summary</button>


              </div>
            </div>
          );
        })}
      </div>
 
      <div className="heading">
        <h3>Romance</h3>
      </div>

      <div className="buttons">
        <button className="btn-left">&#8594;</button>
        <button className="btn-right">&#8592;</button>
      </div>
      <div className="list">
        {romance.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.cover} alt="preview image" />
              </div>
              <div>
                <p>{item.name}</p>
                <button onClick={handlePreview} value={`?name=${item.name}&author=${item.author}&imgUrl= ${item.cover}`}>View Summary</button>

              </div>
            </div>
          );
        })}
      </div>
      <div className="heading">
        <h2>Horror</h2>
      </div>
      <div className="buttons">
        <button className="btn-left">&#8594;</button>
        <button className="btn-right">&#8592;</button>
      </div>
      <div className="list">
        {horror.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.cover} alt="preview image" />
              </div>
              <div>
                <p>{item.name}</p>
                <button onClick={handlePreview} value={`?name=${item.name}&author=${item.author}&imgUrl= ${item.cover}`}>View Summary</button>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
export default DisplayBooks;
