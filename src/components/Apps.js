import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Hops from '../assets/hops.jpg'
import Garden from '../assets/garden.jpg'
import AppsImg from '../assets/phone-img.jpg'
import Websites from '../assets/websites.jpg'

class Apps extends Component {

  render() {
    return (
      <div className="apps__container">
        <Typography variant="headline" component="h1" className="apps__title">
          Projects
        </Typography>
        <div className="card__container">
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Websites}
              title="Websites"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Websites
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="#">
                GitHub
              </Button>
            </CardActions>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={AppsImg}
              title="React Native Flux Router Expo"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Mobile Apps
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="#">
                GitHub
              </Button>
            </CardActions>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Garden}
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Gardens
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Hops}
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Beers
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default Apps