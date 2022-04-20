import "./styles/styles.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";



const App = () => {

    const [toggleDark, settoggleDark] = useState(false);
    const myTheme = createTheme({
    
                 // Theme settings
                palette: {
                    type: toggleDark ? "dark" : "light",
                    },
             });
    

  
    return (
    <ThemeProvider theme={myTheme}>
      
    
        <div className="App">
            <PersistentDrawerLeft 

            toggleDark={toggleDark} 
            settoggleDark={settoggleDark} />
            <Routes>
                <Route path="/" element={<Content 
                        
                       />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    
    </ThemeProvider>
    );
};

export default App;