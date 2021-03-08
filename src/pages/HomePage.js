import axios from 'axios';
import {useEffect, useState} from 'react';

import './HomePage.scss';

import MovieCard from '../components/MovieCard';

const HomePage = () => {

    const [HomeList, setHomeList] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?page=1', {
          params: {
              api_key: '8d08d31e1b08de961a19e2ae293de867'
          }
      })
      .then ((response) => {
        setHomeList ({
            isFetched: true,
            data: response.data.results,
            error: false,
        })
        console.log(response)

      })
      .catch(function (error) {
        setHomeList({
            isFetched: true,
            data: [],
            error: error
        })
      })
      .then(function () {
         // always axecuted
      })
    }, [])

    console.log(HomeList.data)
    return (
        <div className="popu">
            {
               HomeList.isFetched ? (
                   <div className="movies-holder">
                       {
                           HomeList.data.map((itam, index) => (
                             <MovieCard
                               id={itam.id}
                               imgLink={itam.poster_path}
                               title={itam.title}
                               key={index}
                               rating={itam.vote_average}
                               releaseDate={itam.release_date}
                             />
                           ))
                       }
                   </div>
               ) : (
                   <h1>Loading ...</h1>
               )
            }
        </div>


    )
}

export default HomePage;