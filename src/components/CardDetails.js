import React from 'react'

export const CardDetails = ({ cardDetails, ratings }) => {

    return (
        <div>
            <h4>Plot</h4>
            <p>{cardDetails.Plot}</p>
            <h4>Actors</h4>
            <p>{cardDetails.Actors}</p>

            <h4>Ratings</h4>
            {ratings.map((rating, index) =>
                <p key={index}>- {rating.Source}: {rating.Value}</p>
            )}
        </div>
    )
}
