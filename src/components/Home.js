import React, { Component } from 'react'
import Header from './Header'
import Apps from './Apps'
import Team from './Team'

class Home extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Apps/>
        <Team/>
      </div>
    )
  }
}

export default Home