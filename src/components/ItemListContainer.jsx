import React from "react";

const greeting ="Bienvenidos a Dulce Perri Estetica Canina";
export default function ItemListContainer(){
    return(
        <>
        <div className="greeting">
            {greeting}
        </div>
        {/* <p class="bienvenida">Bienvenidos a Dulce Perri Estetica Canina</p> */}
        </> 
    );
}