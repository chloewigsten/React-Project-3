import { Link } from 'react-router-dom'

function Header(props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
      };
      return (
        <header>
          <h1>Dog Breeds</h1>
          <nav style={navStyle}>
            <Link to="/">
              <div>HOME</div>
            </Link>
            <Link to="/display">
              <div>Breed List</div>
            </Link>
          </nav>
        </header>
   )
 }
  export default Header;