import "./styles/styles.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

const App = () => {
    return (
        <div className="App">
            <PersistentDrawerLeft />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;