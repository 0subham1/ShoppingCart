// this will be our root component, all other components will be its child components
// alias
// import {BrowserRouter as Router} from 'react-router-dom'

import Home from "./pages/Home";
import Products from "./pages/Products";
import Nav from "./component/Nav";
import Cart from "./pages/Cart";

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// <> react fragments to add more than one component
// <div>
// <h1>hello world</h1> <p>apple</p>
// </div>
// </>
// export default present in js modules
