import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import User from './pages/User'

const App = () => {
    return (
        <div>
            <Header Login = {false}></Header>
            <Routes>
                <Route path = "/" element = {<Home/>}></Route>
                <Route path = "/user" element = {<User/>}></Route>
            </Routes>
            
        </div>
        
    )
}

export default App