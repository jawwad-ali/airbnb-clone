import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./Banner.css"
import Search from "./Search"

function Banner() {

    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">
                    {/* Search Dates */}
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out of stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you </h5>
                <Button>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
