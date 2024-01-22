
import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Banner.css';
import requests from './Request';

const Banner = () => {
    // State for storing the fetched movie
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                
                if (request.data.results && request.data.results.length > 0) {
                    // Set a random movie from the fetched data
                    setMovie(
                        request.data.results[
                            Math.floor(Math.random() * request.data.results.length-1)
                        ]
                    );
                } else {
                    console.error('Empty or invalid response from the API');
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
    
        // Call the fetchData function
        fetchData();
    }, []);
    

    // Function to truncate the movie description
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: 'center center',
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.name || ''}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='banner_fadeBottom' />
        </header>
    );
};

export default Banner;

