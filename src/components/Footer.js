import React, { Component } from 'react'
import '../App.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
          © 2019 {process.env.REACT_APP_WEBSITE_NAME}
      </div>
    )
  }
}

export default Footer