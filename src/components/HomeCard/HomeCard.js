import {Link} from 'react-router-dom'

import './HomeCard.scss'

const HomeCard = ({imgLink, title, id, rating, releaseDate}) => {
    return (
        <div className="home-card">
            <div className="top-rating">
                {rating}
            </div>
            <Link to={`/movie/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${imgLink}`} alt="" className="card-img"/>
            <h2 className="card-title">{title}</h2>
            </Link>
            <h5 className="release-date">{releaseDate}</h5>
            <Link to={`/movie/${id}`} className='card-btn'>
                More info
            </Link>
        </div>
        
    )
}

export default HomeCard;