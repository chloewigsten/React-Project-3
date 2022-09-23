import { Routes, Route, Outlet } from 'react-router-dom'
import Characters from '../pages/Characters'
import ShowPage from '../pages/Show'
import Home from './Home'
import AddNew from '../pages/AddNew'

const Main = () => {
    return (
        <main>
            <Outlet />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/characters/:id' element={<ShowPage />} />
                <Route path='/character/add-new' element={<AddNew />} />
            </Routes>
        </main>
    )
}

export default Main;