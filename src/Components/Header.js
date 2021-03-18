import React from 'react'
import { Search, Language, ExpandMore } from '@material-ui/icons'
import "./Header.css"
import { Avatar } from "@material-ui/core"

function Header() {
    return (
        <div className="header">
            <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="airbnb"
                className="header__icon"
            />
            <div className="header__center">
                <input type="text" />
                <Search />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
