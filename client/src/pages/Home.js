//rfce macro creates boilerplate skeleton setup for new page
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import useWindowDimensions from '../hooks/getWindowsDimensions';
import Clock from 'react-live-clock'

function Home() {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);
  const { height, width } = useWindowDimensions();

  useEffect(() => { //useEffect hook renders after each change
    axios.get('http://localhost:3001/posts').then((response) => {
      setListOfPosts(response.data);
    })
  }, []); //2nd param of useEffect stops infinite loop (I think by setting it to the value of 2nd param [] on 2nd render?)

  return (
    <div class='homepage'>
      <Carousel indicators='' controls='true' pause='hover' interval='2500'> {/*fade allows you to change animation -- interval of animation in MS*/}
        <Carousel.Item>
          <img
            className="carouselImage"
            src={`https://picsum.photos/${width - 50}/${height - 100}?random=1`}
            alt="First slide"
            loading='lazy'
          />

          <Carousel.Caption>
            <strong><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
            <p style={{ fontSize: '20px' }}>Your resolution is: <strong>{width}x{height}</strong></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={`https://picsum.photos/${width - 50}/${height - 100}?random=2`}
            alt="Second slide"
            loading='lazy'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={`https://picsum.photos/${width - 50}/${height - 100}?random=3`}
            alt="Third slide"
            loading='lazy'
          />
        </Carousel.Item>

      </Carousel>
    </div >
  )
}

export default Home
