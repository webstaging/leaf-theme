import React, { Component } from 'react'
import Leaf from '../assets/leaf.jpg'
import LazyHero from 'react-lazy-hero'

const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + 'px'

class Header extends Component {

  render() {
    return (
      <div>
          <LazyHero imageSrc={Leaf} 
              isCentered={true}
              minHeight={viewportHeight}
              opacity={.4}
              parallaxOffset={100}
              className="hero__container"
              color="darkgreen"
          >
            <h1 className="app__title">Left Template</h1>
          </LazyHero>
      </div> 
    )
  }
}

export default Header