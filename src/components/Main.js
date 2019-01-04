import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Apps from './Apps'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

class Main extends Component {

  render() {
    return (
      <main>
         <Switch>
            <Route 
              exact path='/'
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route path='/apps' component={Apps}/>
            <Route path='/team' component={Team}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
          <Footer />
      </main>
    )
  }
}

export default Main