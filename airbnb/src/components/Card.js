import React from 'react'

export default function Card({
    image,
    title,
    price,
    rating,
    reviewcount,
    location,
    id,
    openspots,
}) {
    return (
        <div className="card" key={id}>
            {openspots && <div className="card-badge">SOLD OUT</div>}
            <img
                src={`../images/${image}`}
                alt={title}
                className="card--image"
            />
            <div className="card--stats">
                <img
                    src={`../images/star.png`}
                    alt="star"
                    className="card--star"
                />
                <span>{rating}</span>
                <span className="gray">({reviewcount})</span>
                <span className="gray">{location}</span>
            </div>
            <p>{title}</p>
            <p>
                <span className="bold">From {price} </span> / person
            </p>
        </div>
    )
}
