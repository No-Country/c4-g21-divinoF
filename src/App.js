import "./styles/styles.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const App = ({ signOut }) => {

    const [toggleDark, settoggleDark] = useState(false);
    const myTheme = createTheme({
    
                 // Theme settings
                palette: {
                    type: toggleDark ? "dark" : "light",
                    },
             });
    
    
  
    return (
    <ThemeProvider theme={myTheme}>
      
    
    <div className={"App" }>
           {/*  <header>
            
                <h1>We now have Auth!</h1>
            </header>
            <AmplifySignOut /> */}
            
            <PersistentDrawerLeft 

            toggleDark={toggleDark} 
            settoggleDark={settoggleDark} />
            <Routes>
                <Route path="/" element={<Content toggleDark={toggleDark} 
            settoggleDark={settoggleDark}
                        
                       />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <div>
             
                <button onClick={signOut}>Sign out</button>
            </div>
        </div>
    
    </ThemeProvider>
    );
};

export default  withAuthenticator(App); 