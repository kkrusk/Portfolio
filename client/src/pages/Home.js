//rfce macro creates boilerplate skeleton setup for new page
import React from 'react'
import { Carousel } from 'react-bootstrap'
import useWindowDimensions from '../hooks/getWindowsDimensions';
import Clock from 'react-live-clock'

function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <div class='homepage'>
      <Carousel className='carousel' indicators='' controls='true' pause='hover' interval='5000'> {/*fade allows you to change animation -- interval of animation in MS*/}
        <Carousel.Item>
          <img
            className="carouselImage"
            src={`https://picsum.photos/${width - 50}/${height - 100}?random=1`}
            alt="First slide"
            loading='lazy'
          />

          <Carousel.Caption>
            <strong><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
            <p style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height}</strong></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={`https://picsum.photos/${width - 50}/${height - 100}?random=2`}
            alt="Second slide"
            loading='lazy'
          />

          <Carousel.Caption>
            <strong><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
            <p style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height}</strong></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={`https://picsum.photos/${width - 50}/${height - 100}?random=3`}
            alt="Third slide"
            loading='lazy'
          />

          <Carousel.Caption>
            <strong><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
            <p style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height}</strong></p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div >
  )
}

export default Home
