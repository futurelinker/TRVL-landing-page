import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src='/videos/video-1.mp4' autoPlay loop muted></video>
      <h1>Adventure waits</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          >
          Get Started  
          </Button>
          <Button
          className="btns"
          buttonSize="btn--large"
          >
          Watch Trailer <i className="far fa-play-circle"></i>  
          </Button>
      </div>
    </div>
  )
}

export default HeroSection
