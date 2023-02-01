import React from "react";
import ProductsList from "../../data/ProductsList";
import { Link, NavLink, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import QueryNavLink from "../QueryNavLink";

const Mobiles = () => {

const navigate = useNavigate()

  let [searchParams, setSearchParams] = useSearchParams();

  const searchBoxChangeHandler = (e) => {
    const filter = e.target.value
    setSearchParams({filter})
  }

  
  // console.log(searchParams.get("filter"))
  return (
    <div>

<button onClick={()=>navigate("/welcome")}> go to welcome page </button>

      <input value={searchParams.get("filter")} onChange={searchBoxChangeHandler} />

      {


        ProductsList.filter(mobile => {
          let d1 = searchParams.get("filter") //iph
          if (!d1)
          { 
          return true
          }
          let name = mobile.name.toLowerCase()
          return name.startsWith(d1.toLowerCase())
        }).map((item) => {
          return (
            <div>
              <QueryNavLink style={(isActive) => {
                return { color: isActive ? 'green' : '', margin: isActive ? '15px' : '', display: 'block' }
              }} to={`/mobiles/${item.id}`}>{item.name}</QueryNavLink>
            </div>
          );
        })}
      <Outlet />
    </div>
  );
};

export default Mobiles;
