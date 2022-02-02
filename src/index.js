import React from 'react'
import ReactDOM from "react-dom"
import Header from "./Header.js"
import Styles from "./style.css"
import Search from "./Search.js"
import Navbar from "./Navbar.js"
import Addtask from "./Addtask.js"
import MainContent from "./MainContent.js"



function Page(){
    return (
        <div>
                <Header />
                <Search />
                <Navbar />
                <Addtask />
                <MainContent />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))