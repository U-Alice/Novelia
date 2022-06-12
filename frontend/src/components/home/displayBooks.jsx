// import { GetBooks } from "./booksContext.js";
function DisplayBooks(){
const GetBooks = async ()=>{
  await fetch("http://localhost:4001/getBooks", {
      method:"GET"
  }).then((res)=>{
      return res.json()
  }).then(data=>{
      console.log(data)
  })
}
GetBooks()
  return (
    
    <div>
      <div className="heading">
        <h1>Trending Now</h1>
      </div>
    <div className="list">
      <div className="listItem">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div>
        <p>Nadfasdfdsfajlkhljkkljhlsdfasdfame</p>
        <button>View Summary</button>
      </div>
      </div>
      <div className="listItem">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div>
        <p>Name</p>
        <button>View Summary</button>
      </div>
      </div>
      <div className="listItem">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div>
        <p>Name</p>
        <button>View Summary</button>
      </div>
      </div>
      <div className="listItem">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div>
        <p>Name</p>
        <button>View Summary</button>
      </div>
      </div>
      <div className="listItem">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div>
        <p>Name</p>
        <button>View Summary</button>
      </div>
      </div>
      <div className="listItem">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div>
        <p>Name</p>
        <button>View Summary</button>
      </div>
      </div>
      <div className="listItem">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div>
        <p>Name</p>
        <button>View Summary</button>
      </div>
      </div>
    </div>
    </div>
  );
}
export default DisplayBooks;
