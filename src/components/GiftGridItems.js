import React from 'react'

export const GiftGridItems = ({ id, title, url }) => {

    return (
        <div className="card animate__animated animate__zoomInDown">
            <img src={url} alt={title} />
            <p>{title.toUpperCase()}</p>
        </div >
    )
}

