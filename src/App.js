import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Laptop from "./components/pages/Laptop";
import Mobiles from "./components/pages/Mobiles";
import { useState } from "react";
import NotFound from "./components/pages/NotFound";
import SingleProduct from "./components/pages/SingleProduct";
import Welcome from "./components/Welcome";

function App() {
  const [searchText, setSearchText] = useState("");

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <input type="text" onChange={changeHandler} value={searchText} />
        <button>search</button>
      </form>

      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="laptops" element={<Laptop />} />
            <Route path="mobiles/:id" element={<SingleProduct />} />
            <Route path="mobiles" element={<Mobiles />}>
              <Route index element={<h1>please select a product</h1>} />
              
            </Route>
            <Route path="welcome" element={<Welcome /> } />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
