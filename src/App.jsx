import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Main from "./Component/Main";
import './App.css'
import { useState } from "react";
import {titles} from './Data';
import { contents} from "./Data"; 

function App(){
    
    let[title,setTitle]=useState("Home");
    let[content,setContent]=useState("React is a JavaScript library for building user interfaces.");

    let handleClick =(idx)=>{
        setTitle(titles[idx]);
        setContent(contents[idx]);
    }
   
    return(
        <div>
            <Navbar></Navbar>
            
            <div className="Sidebar-Main-container">
            <Sidebar handleClick={handleClick} ></Sidebar>
            <Main title={title} content={content}></Main>
            
            </div> 
        </div>
    );
}
export default  App;