import { Link } from "react-router-dom";

const Nav = () => {

  const cartStyle ={
    background:"aqua",
    display:"flex",
    padding:"6px 12px",
    borderRadius:"30px"
  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between" >
        <Link to={"/"}>
          <img style={{ height: 120 }} src="/img/klogo.png"></img>
        </Link>
        <ul>
          <li className='font-bold'>KIDS CART
          </li>
        </ul>

        <ul className="flex items-center">
          <li><Link to={"/"}>Home</Link></li>
          <li className="ml-3"><Link to={"/products"}>Products</Link></li>
          <li className="ml-3"><Link to={"/cart"}>
            <div style={cartStyle}>
              <span>10 </span>
              <img className="ml-2" src="/img/cart.png" />
            </div>
            </Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

{
  /* <Link to={"/"}>Home</Link>
<Link to={"/about"}>About</Link> */
}
