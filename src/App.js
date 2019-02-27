import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from '@material-ui/core/Drawer'
import Menu from 'material-ui/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import Smartphone from 'material-ui/svg-icons/hardware/smartphone'
import ContactIcon from 'material-ui/svg-icons/action/info'
import Home from 'material-ui/svg-icons/action/home'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Main from './components/Main'
import { Link } from 'react-router-dom'
import logo from './logo-site.png'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import './App.css'

class App extends Component {

  state = {
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    return (
        <MuiThemeProvider>
          <AppBar position="static" className="appbar"  style={{backgroundColor: 'snow'}}>
            <Toolbar className="toolbar">
              <IconButton aria-label="Menu" onClick={this.toggleDrawer('right', true)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <img src={logo} className="app__logo" alt="logo" />
          </AppBar>
          <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
            <div className="drawer__container">
              <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)} onKeyDown={this.toggleDrawer('right', false)} width={500}>
                <Link to={{ pathname: '/', state: { theme: 'polo' } }}>
                  <img src={logo} className="app__logo app__logo--drawer" alt="logo" />
                </Link>
                <Menu>
                  <Link to={{ pathname: '/', state: { theme: 'polo' } }}>
                    <MenuItem primaryText="Home" leftIcon={<Home />}/>
                  </Link>
                </Menu>
              </div>
              <Menu>
                <Link to="/apps">
                  <MenuItem 
                    primaryText="App Tools"
                    leftIcon={<Smartphone />}
                  />
                </Link>
                <Link to="/team">
                  <MenuItem 
                    primaryText="Team"
                    leftIcon={<Smartphone />}
                  />
                </Link>
                <Link to="/contact">
                  <MenuItem 
                    primaryText="Contact"
                    leftIcon={<ContactIcon />}
                  />
                </Link>     
              </Menu>
            </div>
          </Drawer>
          <Main theme='Leaf' />
        </MuiThemeProvider>
    )
  }
}

export default App