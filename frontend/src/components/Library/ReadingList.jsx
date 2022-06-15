import Navbar from "../home/navbar";
import LibraryNav from "./LibraryNav";

function List() {
  return (
    <div className="readList">
      <Navbar />
      <LibraryNav />
      <button id="create">Create a new reading List</button>
      <div className="readList">
        <div className="readItem">
          <div className="readImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg"
              id="readImage"
              alt=""
            />
          </div>
          <div className="collectionName">
            <p>My romantic Collection</p>
            <p>72 Novels</p>
          </div>
          <div>
            {" "}
            <p>view</p>
          </div>
          <div>
            {" "}
            <p>
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
        </div>
        <div className="readItem">
          <div className="readImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg"
              id="readImage"
              alt=""
            />
          </div>
          <div className="collectionName">
            <p>My romantic Collection</p>
            <p>72 Novels</p>
          </div>
          <div>
            {" "}
            <p>view</p>
          </div>
          <div>
            {" "}
            <p>
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
        </div>
        <div className="readItem">
          <div className="readImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg"
              id="readImage"
              alt=""
            />
          </div>
          <div className="collectionName">
            <p>My romantic Collection</p>
            <p>72 Novels</p>
          </div>
          <div>
            {" "}
            <p>view</p>
          </div>
          <div>
            {" "}
            <p>
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
        </div>
        <div className="readItem">
          <div className="readImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg"
              id="readImage"
              alt=""
            />
          </div>
          <div className="collectionName">
            <p>My romantic Collection</p>
            <p>72 Novels</p>
          </div>
          <div>
            {" "}
            <p>view</p>
          </div>
          <div>
            {" "}
            <p>
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default List;
