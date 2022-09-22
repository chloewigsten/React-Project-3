import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header style={{height: "300px", overflow: 'hidden'}}>
                <nav className='nav'>
                <Link to='/'>
                    <img src='https://i.imgur.com/vJSl5c8.png' alt='Home' width='200px'/>
                </Link>
                <img className="logo" src="https://i.imgur.com/HLC3WEc.png" alt="bob's burgers logo" />
                <Link to='/characters'>
                <img src='https://i.imgur.com/hnuGqLH.png' alt='All Characters'/>
                </Link>
                </nav>
        </header>
    )
  }
  
  export default Header;
  