import React, {useEffect} from 'react'
import Slider from "react-slick";
import "../assets/styles/cards.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slick-slider.css"
import axios from "axios"

const Cards = () => {

    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=85e184be"
    
    const getMovies = () => {
        axios.get (API)
        .then((res)=> {
            console.log(res, "Marvel")
            
        })
    }

    useEffect(() => {
      getMovies()
    }, [])
    
  return (
    <Slider className='tray-area'>
        <div className='trays-container'>
            <div className='trays'>
                <a href='#'>Latest & Trending</a>
                <div className='tray-card'>
                    <p>adsfasdasd</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Cards