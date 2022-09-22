import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <header className="home">
            <h1>All Your Favorite Bob's Burger's Crew In One Place</h1>
            <div> 
                <Link to='/characters'>
                    <img src="https://i.imgur.com/Uf0A7B6.png" alt="Browse The Characters"/>
                </Link>
                <p>Find out more about the characters, and see how much you already knew about each one of them!</p>
            </div>
            <div className="add-new">
            <Link to='/characters/add-new'>
                   <h3>Add A New Character</h3>
                </Link>
            </div>
            <Link to='/characters'>
                    <img src="https://i.imgur.com/Uf0A7B6.png" alt="Browse The Characters"/>
                </Link>
            <div className='about-bob'>
                <img src="https://i.imgur.com/sd8oEyx.png" alt="bob talking to camera" className='about-bob-image'/>
                <div className='about-bob-text'>
                    <h2>About Bob</h2>
                    <p>Robert "Bob" Belcher Jr. is a third-generation restaurateur, and the main protagonist of the Fox's reality series, Bob's Burgers. Bob runs Bob's Burgers with the help of his wife, Linda Belcher, and their three kids, Tina Belcher, Louise Belcher, and Gene Belcher.

                    While poor with business management and cursed with an unlucky streak, his experience and skill in homemade cuisine has helped his restaurant stay afloat, in spite of seemingly constant financial uncertainty, providing for his family all the while. Learn more about Bob <a href="https://bobs-burgers.fandom.com/wiki/Bob_Belcher">here</a>. </p>
                </div>
            </div>
        </header>
    )
  }
  
  export default Home;
  