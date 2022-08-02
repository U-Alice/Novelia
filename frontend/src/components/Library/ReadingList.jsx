import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../home/navbar";
import Footer from "../landingPage/footer";
import LibraryNav from "./LibraryNav";

function List() {
  const [list, setList] = useState([]);

  const getList = async () => {
    const api = await fetch("http://localhost:4001/getList", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });
    let data = await api.json();
    let books = await data.List;
    setList(books);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="readList">
      <Navbar />
      <LibraryNav />
      <button id="create">Create a new reading List</button>
      {list ? (
             <div className="readList">
             {list.map((item) => {
               return (
                 <div className="readItem">
                   <div className="readImage">
                     <img src={item.imgUrl} id="readImage" alt="" />
                   </div>
                   <div className="collectionName">
                     <p>{item.title}</p>
                     <p>{item.author}</p>
                   </div>
   
                   <div>
                     {" "}
                     <p>
                       <i class="fa-solid fa-ellipsis"></i>
                     </p>
                   </div>
                 </div>
               );
             })}
           </div>
        ) : (
        <div className="readList"> <h1 className="waterMark">Read List not yet Created</h1></div>
   
      )}
      <Footer />
    </div>
  );
}
export default List;
