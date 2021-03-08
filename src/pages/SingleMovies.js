import axios from "axios";
import { useEffect, useState } from "react";

import ArtistCard from '../components/ArtistCard'

import './pages.scss';

const SingleMovies = ({ match }) => {
  const [movieInfo, setMovieInfo] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  const [actorsList, setActorsList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
        params: {
          api_key: "8d08d31e1b08de961a19e2ae293de867",
        },
      })
      .then((response) => {
        setMovieInfo({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setMovieInfo({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
        // always axecuted
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
        params: {
          api_key: "8d08d31e1b08de961a19e2ae293de867",
        },
      })
      .then((response) => {
        setActorsList({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setActorsList({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
        // always axecuted
      });
  }, []);

  console.log(actorsList.data);

  const movieInfoData = movieInfo.data;
  const movieCastActors = actorsList.data.cast;

  console.log(movieCastActors)

  return (
    <>
      {movieInfo.isFetched ? (
        <div className="movie-info">
          <img className="movie-info-back"

            src={`https://image.tmdb.org/t/p/w500/${movieInfoData.backdrop_path}`}
            alt=""
          />
          <div className="movie-info-front containers">
            <img className='movie-poster'
                src={`https://image.tmdb.org/t/p/w500/${movieInfoData.poster_path}`}
                alt=""
            />
            {/* <img src={movieInfo.data.backdrop_path} alt=""/> */}
            <div className="front-info">
                <h1>{movieInfoData.title}</h1>
                <h2>{movieInfoData.original_title}</h2>
                <h3>{movieInfoData.tagline}</h3>
                <p>{movieInfoData.overview}</p>
                <h4>Budget: ${movieInfoData.budget}</h4>
                <h4>
                Release date: <span>{movieInfoData.release_date}</span>
                </h4>
                <h4>Runtime: {movieInfoData.runtime}</h4>

                <a href={movieInfoData.homepage} target="_blank">
                Official site
                </a>

                {movieInfoData.genres.map((genre, index) => (
                <button key={index}>{genre.name}</button>
                ))}
                <h2>Actors:</h2>
                {
                  actorsList.isFetched ? (
                    <div className="actors-list">
                      {
                          movieCastActors.map((actor, index) => (
                            <ArtistCard
                              id={actor.id} 
                              key={index}
                              name={actor.name}
                              charName={actor.character}
                              imgLink={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                            />
                          ))
                      }
                    </div>
                  ) : (
                    <h2>
                      Loading ...
                    </h2>
                  )
                }
            </div>
          </div>
        </div>
      ) : (
        
        <h1>Loading ...</h1>

      )}
    </>
  );
};

export default SingleMovies;
