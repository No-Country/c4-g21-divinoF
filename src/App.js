import "./styles/styles.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import LoaderSpinner from "./components/LoaderSpinner";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
           <LoaderSpinner /> 
        </div>
        
    );
};

export default App;
