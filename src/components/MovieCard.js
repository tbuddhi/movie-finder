import React, { useState } from 'react'
import { CardDetails } from './CardDetails'

export const MovieCard = ({ movie }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [cardDetails, setCardDetails] = useState({})
    const [ratings, setRatings] = useState([])


    const getDetails = async () => {

        const imdbID = movie.imdbID;
        const API_URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=4659a8fd`;

        try {
            const response = await fetch(API_URL);
            const jsonData = await response.json();

            // console.log(jsonData);
            setCardDetails(jsonData)
            setRatings(jsonData.Ratings)

        } catch (err) {
            console.error(err);
        }

        setShowDetails(!showDetails);
    }

    return (
        <div className={`col-md-50 m-card-wrapper ${showDetails ? 'w-100' : ''}`}>
            <div className="m-card">
                <div className="m-card__img-wrapper">
                    <img src={movie.Poster} alt={movie.Title}></img>
                </div>
                <div className="m-card__details">
                    <p>{movie.Title}</p>


                    <div className={`m-card__details__collapse ${!showDetails ? 'd-none' : ''}`}>
                        <CardDetails cardDetails={cardDetails} ratings={ratings} />
                    </div>

                    <div className="m-card__footer">
                        <label>{movie.Year}</label>
                        <button type="button" onClick={getDetails}>
                            {!showDetails ? "Details" : "Hide Details"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
