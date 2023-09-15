import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Spinner from "./Spinner";

export default function MoviePage() {
    const { id } = useParams();
    console.log(id)
    const [content, setContent] = useState([], 1);

    // const fetchSearch = async () => {
    //     const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a1bfe11e0614712a754176f6b6e156ba`);
    //     var res = await data.json();
    //     setContent(res);
    //     console.log(content)
    // };
    useEffect(() => {
        document.querySelector('.spin').style.display = 'block'
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a1bfe11e0614712a754176f6b6e156ba`)
            .then((res) => res.json())
            .then(document.querySelector('.spin').style.display = 'none')
            .then((data) => setContent(data))
            .catch ((error) => window.location = '/error')


}, []);

return (

    <div className='allWrapper'>
        <div className='sideBar'>
            <span className='logo2'>KhalidMDB</span>
            <span className='logo2 logo3'>K</span>

            <Link to="/" className='yo'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <p>Home</p>
            </Link>
            <Link className='yo'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-movie" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="4" x2="8" y2="20" />
                    <line x1="16" y1="4" x2="16" y2="20" />
                    <line x1="4" y1="8" x2="8" y2="8" />
                    <line x1="4" y1="16" x2="8" y2="16" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="16" y1="8" x2="20" y2="8" />
                    <line x1="16" y1="16" x2="20" y2="16" />
                </svg>
                <p>Movie</p>
            </Link>

        </div>

        <div className='right'>
            <div className='rightTopper'>
            </div>
            <div className='rightTop'>
                <Spinner />
                <img className='sImage' src={content && `https://image.tmdb.org/t/p/original/${content.poster_path}`} />

            </div>


            <div className='rightButt'>
                <h2 className='sTitle' data-testid="movie-title">{content && content.title}</h2>
                <p data-testid="movie-release-date"> <i className='bold'>{content && 'Release date: '} </i> {content && content.release_date}</p>
                {/* <p data-testid="movie-runtime"> <i className='bold'>Runtime: </i> unavailable</p> */}
                <p data-testid="movie-overview"><i className='bold'>{content && 'Overview: '} </i> {content && content.overview}</p>
            </div>

        </div>
    </div>
);
}