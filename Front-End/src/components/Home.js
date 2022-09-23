import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <header className="home">
            <div className='section-one'> 
                <Link to='/characters'>
                    <img src="https://i.imgur.com/zNsnqat.png" alt="Browse The Characters"/>
                </Link>
                <div className="intro">
                    <h1>All Your Favorite Bob's Burger's Crew In One Place</h1>
                    <p>Find out more about the characters, and see how much you already knew about each one of them!</p>
                </div>
            </div>
            <div className='about-bob'>
                <img src="https://i.imgur.com/sd8oEyx.png" alt="bob talking to camera" className='about-bob-image'/>
                <div className='about-bob-text'>
                    <h2 className='about-bob-title'>About Bob</h2>
                    <p>Robert "Bob" Belcher Jr. is a third-generation restaurateur, and the main protagonist of the Fox's reality series, Bob's Burgers. Bob runs Bob's Burgers with the help of his wife, Linda Belcher, and their three kids, Tina Belcher, Louise Belcher, and Gene Belcher. Learn more about Bob <a href="https://bobs-burgers.fandom.com/wiki/Bob_Belcher">here</a>. </p>
                </div>
            </div>
        </header>
    )
  }
  
  export default Home;
  