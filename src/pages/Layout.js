import { Outlet, Link } from "react-router-dom";

// const navStyle = {
//   backgroundColor: "#d5beed",
//   color: "#ffffff",
//   listStyle: "none",
//   display: "flex",
//   fontSize: "20px",
//   justifyContent: "space-between",
//   padding: "15px",
//   marginTop: "0px",
// };

function Navigation() {
  return (
    <>
      <nav>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/*">Error</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
