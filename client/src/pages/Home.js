//rfce macro creates boilerplate skeleton setup for new page
import React from 'react'
import { Carousel } from 'react-bootstrap'
import useWindowDimensions from '../hooks/getWindowsDimensions';
import Clock from 'react-live-clock'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function Home() {
  const { height, width } = useWindowDimensions();
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div class='homepage'>

      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <p class="home-animation-line-1 anim-typewriter">Welcome to my website!</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "3em" }}>This is a current work in progress</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <strong><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
            <p className='clock' style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height}</strong></p>
            <span style={{ fontSize: "3em" }}>Feel free to contact me below!</span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>














      <Carousel className='carousel' indicators='' controls='true' pause='hover' interval='5000'> {/*fade allows you to change animation -- interval of animation in MS*/}
        <Carousel.Item>
          <img
            className="carouselImage"
            src={`https://picsum.photos/${width - 50}/${height - 100}?random=1`}
            alt="First slide"
            loading='lazy'
          />

          <Carousel.Caption>
            <strong><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
            <p className='clock' style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height}</strong></p>
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

            <strong><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></strong>
            <p className='clock' style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height}</strong></p>
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
            <strong><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
            <p className='clock' style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height}</strong></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div >
  )
}

export default Home;
