import React from "react";
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <div>
            <div style={{width:"100%",height:"10%"}}>
                <Navbar/>
            </div>
            <div style={{width:"100%",height:"90%"}}>
                <h2>This is Home page</h2>
            </div>
        </div>
    )
 }