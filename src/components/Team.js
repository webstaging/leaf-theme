import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import TeamImg from '../assets/team.jpg'
import '../App.css'

class Team extends Component {

  render() {
    return (
       <div className="apps__container apps__container--gold">
        <Typography variant="headline" component="h1" className="apps__title">
          Team
        </Typography>
        <div className="card__container card__container--one-column">
          <Card className="card__item card__item--big">
            <CardMedia
              className="card__media card__media--big"
              image={TeamImg}
              title="React Native Flux Router Expo"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default Team