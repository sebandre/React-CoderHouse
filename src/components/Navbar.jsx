import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import CartWidget from "./CartWidget";

//const pages = [{label:"Home",link:"www.google.com"},{label:"Clientes",link:"www.google.com"},{label:"Contacto",link:"www.google.com"}]
export default function Navbar(){
    return(
        <>
        <AppBar position="sticky">
            <Toolbar className="toolB">
                <h1>Dulce Perri</h1>
                <div className="menu">
                  <ul className="lista">
                    <li><a href="http://www.google.com">Home</a></li>
                    <li><a href="http://www.google.com">Clientes</a></li>
                    <li><a href="http://www.google.com">Contacto</a></li>
                  </ul>     
                </div>
                <Box>
                    <CartWidget/>
                </Box>            
            </Toolbar>
        </AppBar>
        </>
    )
} 