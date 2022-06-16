import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Homepage";
import Userpage from "./routes/Userpage";

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