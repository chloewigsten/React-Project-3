import { Routes, Route, Outlet } from 'react-router-dom'
import Characters from '../pages/Characters'
import ShowPage from '../pages/Show'
import Home from './Home'

const Main = () => {
    return (
        <main>
            <Outlet />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/characters/:id' element={<ShowPage />} />
            </Routes>
        </main>
    )
}

export default Main;