import React from 'react'

const BandContainer = (props) => (
    <div>
        <img alt={props.name} src={props.band.profile_img}/>
        <h1>{props.band.name}</h1>
        <h3>Location: {props.band.location}</h3>
        <h3>Genre: {props.band.genre}</h3>
        <h3>Bio: {props.band.bio}</h3>
    </div>
)

export default BandContainer