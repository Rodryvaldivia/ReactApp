import React from "react"
import UserPng from "./images/user.png"

export default function Header() {
    return (
        <div className="header">
            <div className="header-user">
                <img src={UserPng} className="user-img" />
            </div>
            <h2 className="header-p">Hi!, Name user</h2>
        </div>
    )
}