import "./App.css"

import Display from "./components/Display"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Show from "./components/Show"
import { Route, Routes } from 'react-router-dom'

function App() {
  
  const URL = "https://fullstacklastchancebackend.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route exact path='/' element={<Home />} />
        <Route path='/display' element={<Display URL={URL} />} />
        <Route path='/show' element={<Show URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App; 