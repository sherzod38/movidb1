import { Link } from 'react-router-dom'
// import {Link} from 'react-router-dom';

import './ArtistCard.scss'

const ArtistCard = ({id, name, charName, imgLink}) => {
    return (
        <Link to={`actor/${id}`} className="artist-card">
            <img src={imgLink} alt=""/>
            <h4>{name}</h4>
            <h5>{charName}</h5>
        </Link>
    )
}

export default ArtistCard;