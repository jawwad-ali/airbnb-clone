import React from 'react'
import "./SearchResult.css"
import FavouriteBorderIcon from "@material-ui/icons/FavouriteBorder"
import { Star } from '@material-ui/icons'

function SearchResult({ img, location, title, desc, star, price, total }) {
    return (
        <div className="searchResult ">

            <img src={img} alt="searchresult" />

            <FavouriteBorderIcon className="searchResult__heart" />

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <p>{title}</p>
                    <p>___</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <Star className="searchResult__star" />
                    <p>
                        <strong>{star}</strong>
                    </p>
                </div>
                <div className="searchResults__price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>

        </div>
    )
}

export default SearchResult
