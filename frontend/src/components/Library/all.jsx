import Navbar from "../home/navbar";
import LibraryNav from "./LibraryNav";
import "./lib.css";
import {useLocation} from "react-router-dom";
import { useMemo } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";

function All() {
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();
  let id = query.get("id")
  console.log(id)
  const getList = async ()=>{
    const api = await fetch("http://localhost:4001/getList", {
      method: 'GET', 
      headers:{
        Authorization: "Bearer " + Cookies.get("token")
      }
    })
    let data = await api.json()
    console.log(data)
  }
  useEffect(()=>{
getList()
  }, [])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      
      <LibraryNav />
      <div className="lib">
        <div className="libImage">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg" alt="" />
        </div>
        <div className="description">
          <h3>Name: Mexican Gothic</h3>
          <p>Author: Stephanie Meyer</p>
          <p>
            Name: Mexican Gothic Author: Stephanie Meyer Maisie Ashford is
            thankful that her older brother is becoming Alpha. She'd rather not
            have the responsibilities of having to care for her pack with all
            the duties of being Luna. She enjoys her life... She has a crush, a
            best friend, a loving family... what else do you need?Enter Alpha
            Asher ... the Alpha of her rival pack, the dominant Alpha who twists
            her life around. Once he sets his eyes on Maisie, he knows she
            belongs to him.
          </p>
          <button>Start Reading</button>

        </div>
      </div>
      <div className="lib">
        <div className="libImage">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg" alt="" />
        </div>
        <div className="description">
          <h3>Name: Mexican Gothic</h3>
          <p>Author: Stephanie Meyer</p>
          <p>
            Name: Mexican Gothic Author: Stephanie Meyer Maisie Ashford is
            thankful that her older brother is becoming Alpha. She'd rather not
            have the responsibilities of having to care for her pack with all
            the duties of being Luna. She enjoys her life... She has a crush, a
            best friend, a loving family... what else do you need?Enter Alpha
            Asher ... the Alpha of her rival pack, the dominant Alpha who twists
            her life around. Once he sets his eyes on Maisie, he knows she
            belongs to him.
          </p>
          <button>Start Reading</button>

        </div>
      </div>
      <div className="lib">
        <div className="libImage">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg" alt="" />
        </div>
        <div className="description">
          <h3>Name: Mexican Gothic</h3>
          <p>Author: Stephanie Meyer</p>
          <p>
            Name: Mexican Gothic Author: Stephanie Meyer Maisie Ashford is
            thankful that her older brother is becoming Alpha. She'd rather not
            have the responsibilities of having to care for her pack with all
            the duties of being Luna. She enjoys her life... She has a crush, a
            best friend, a loving family... what else do you need?Enter Alpha
            Asher ... the Alpha of her rival pack, the dominant Alpha who twists
            her life around. Once he sets his eyes on Maisie, he knows she
            belongs to him.
          </p>
          <button>Start Reading</button>

        </div>
      </div>
      <div className="lib">
        <div className="libImage">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg" alt="" />
        </div>
        <div className="description">
          <h3>Name: Mexican Gothic</h3>
          <p>Author: Stephanie Meyer</p>
          <p>
            Name: Mexican Gothic Author: Stephanie Meyer Maisie Ashford is
            thankful that her older brother is becoming Alpha. She'd rather not
            have the responsibilities of having to care for her pack with all
            the duties of being Luna. She enjoys her life... She has a crush, a
            best friend, a loving family... what else do you need?Enter Alpha
            Asher ... the Alpha of her rival pack, the dominant Alpha who twists
            her life around. Once he sets his eyes on Maisie, he knows she
            belongs to him.
          </p>
          <button>Start Reading</button>

        </div>
      </div>
      <div className="lib">
        <div className="libImage">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg" alt="" />
        </div>
        <div className="description">
          <h3>Name: Mexican Gothic</h3>
          <p>Author: Stephanie Meyer</p>
          <p>
            Name: Mexican Gothic Author: Stephanie Meyer Maisie Ashford is
            thankful that her older brother is becoming Alpha. She'd rather not
            have the responsibilities of having to care for her pack with all
            the duties of being Luna. She enjoys her life... She has a crush, a
            best friend, a loving family... what else do you need?Enter Alpha
            Asher ... the Alpha of her rival pack, the dominant Alpha who twists
            her life around. Once he sets his eyes on Maisie, he knows she
            belongs to him.
          </p>
          <button>Start Reading</button>
        </div>
      </div>
    </div>
  );
}
export default All;
