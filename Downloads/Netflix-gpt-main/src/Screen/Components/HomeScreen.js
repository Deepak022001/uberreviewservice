import React from 'react'
import './Home.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './Request';
import Row from './Row';
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
    {/* Nav */}
    <Nav/>
    {/* <h1></h1> */}

    <Banner/>
    {/* Banner */}
    
    <Row
      title='NETFLIX_ORIGINALS'
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
       <Row
      title='Trending Now'
      fetchUrl={requests.fetchTrending}
      isLargeRow
      />
       <Row
      title='Top Rated'
      fetchUrl={requests.fetchTopRated}
      isLargeRow
      />
       <Row
      title='Action Movies'
      fetchUrl={requests.fetchActionMovies}
      isLargeRow
      />
       <Row
      title='Comedy Movies'
      fetchUrl={requests.fetchComedyMovies}
      isLargeRow
      />
       <Row
      title='Horror Movies'
      fetchUrl={requests.fetchHorrorMovies}
      isLargeRow
      />
       <Row
      title='Romance Movies'
      fetchUrl={requests.fetchHorrorMovies}
      isLargeRow
      />
       <Row
      title='Documentaries'
      fetchUrl={requests.fetchDocumentaries}
      isLargeRow
      />
      
      
      
      
      
      
      
    {/* Row */}

    </div>
  )
}

export default HomeScreen