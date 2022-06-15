import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Homepage";
import Userpage from "./Pages/Userpage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/user" element = {<Userpage />} />
            </Routes>
        </Router>
    )
}

export default App;