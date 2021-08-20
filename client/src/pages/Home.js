//rfce macro creates boilerplate skeleton setup for new page
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'


function Home() {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => { //useEffect hook renders after each change
    axios.get('http://localhost:3001/posts').then((response) => {
      setListOfPosts(response.data);
    })
  }, []); //2nd param of useEffect stops infinite loop (I think by setting it to the value of 2nd param [] on 2nd render?)

  return (
    <div>

      <Carousel fade='true' indicators='' controls='' pause='hover'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/2000/800?random=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/2000/800?random=2"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/2000/800?random=3"
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>

    </div>
  )
}

export default Home
