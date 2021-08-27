//rfce macro creates boilerplate skeleton setup for new page
import React from 'react'
import useWindowDimensions from '../hooks/getWindowsDimensions';
import Clock from 'react-live-clock'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function Home() {
  const { height, width } = useWindowDimensions();
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div class='homepage'>






      <div class="avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-znjX6ZSMrsZpSbtfX2bXx4Wo7yulYq27A&usqp=CAU" alt="placeholder" />

      </div>



      <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
      </div>

      <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
      </div>

      <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
      </div>

      <div class='homepageScroll'>
        <ScrollContainer>

          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <p class="home-animation-line-1 anim-typewriter">
                Welcome to my website!
              </p>
            </Animator>
          </ScrollPage>

          <div class="bird-container bird-container--four">
            <div class="bird bird--four"></div>
          </div>

          <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "3em" }}>This is a current work in progress</span>
            </Animator>
          </ScrollPage>

          <ScrollPage page={2}>
            <Animator animation={FadeUp}>
              <strong><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{ color: 'white' }} /></strong>
              <p className='clock' style={{ fontSize: '20px' }}>Window resolution: <strong>{width}x{height + 105}</strong></p>
              <span style={{ fontSize: "3em" }}>Feel free to contact me below!</span>

              <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
              </div>

              <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
              </div>

              <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>


      <script>
        $(window.on('load', function() {
          console.log('ehllo')
        }))
      </script>
    </div >
  )
}

export default Home;
