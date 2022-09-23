import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <header style={{height: "300px", overflow: 'hidden'}}>
                <nav className='footer'>
                    <img src="https://i.imgur.com/h1n14sG.png" alt="bob's burgers logo" />
                    <div className='website-credit'>
                      <p>This website was created and designed by Chloe Wigsten.</p>
                    </div>
                </nav>
        </header>
    )
  }
  
  export default Footer;
  