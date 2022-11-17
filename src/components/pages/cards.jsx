import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import "../assets/styles/cards.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"


export default function SimpleSlider() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      autoplay: true,
      speed: 500
    };
// const Cards = () => {
    const [title, setTitle] = useState(null)
    const [actors, setActors] = useState(null)
    const [poster, setPoster] = useState(null)
    const [runtime, setRunTime] = useState(null)
    const [genre, setGenre] = useState(null)
    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=85e184be"
    
    const getMovies = () => {
        axios.get (API)
        .then((res)=> {
            setTitle(res.data.Title)
            setActors(res.data.Actors)
            setPoster(res.data.Poster)
            setRunTime(res.data.Runtime)
            setGenre(res.data.Genre)

            console.log(res)
            

        })
    }

    useEffect(() => {
      getMovies()
    }, [])
    useEffect(() => {
        console.log(title);
    },[title]
    )
    useEffect(() => {
        console.log(actors);
    },[actors]
    )
    useEffect(() => {
      console.log(poster);
    }, [poster])
    useEffect (() => {
        console.log(runtime);
    }, [runtime])
    useEffect(() => {
        console.log(genre);
    }, [genre])
    
  return (
    <Slider {...settings} className='tray-area'>
        <div className='trays-container'>
            <a href='#'>Latest & Trending</a>
            <div className='trays'>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
                <div className='tray-card'>
                    <img src={poster} alt={title} />
                    <div className='card-detail'>
                        <div className='title'>{title}</div>
                        <div className='run-time'>{runtime}</div>
                        <div className='genre'>{genre}</div>
                    </div>
                </div>
            </div>
        </div>
        
    </Slider>
  )
}