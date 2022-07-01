import Cookies from "js-cookie";
import { useContext } from "react";
import { booksContext } from "../booksContext";
import {useNavigate} from "react-router-dom";

function DisplayBooks() {
  
const {trendingBooks , romance, horror, scienceBooks, retrieveBooks} = useContext(booksContext);
const Navigate = useNavigate("")
retrieveBooks();
const handlePreview = (e)=>{
    console.log(e.target.value)
    Navigate(`/preview/?id=${e.target.value}`)
}
  return (
    <div>
      <div className="heading">
        <h2>Trending Now</h2>
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
                <button onClick={handlePreview} value={item._id}>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="heading">
        <h2>Science</h2>
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
                <button>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>
 
      <div className="heading">
        <h3>Romance</h3>
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
                <button>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="heading">
        <h2>Horror</h2>
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
                <button>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
    
  );
}
export default DisplayBooks;
