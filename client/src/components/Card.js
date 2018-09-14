import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';
import "../App.css"

const still = ["https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/friends.jpg?raw=true", 
"https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/burger.jpg?raw=true",
"https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/btc.jpg?raw=true", 
"https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/train.jpg?raw=true",
"https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/giphy2.jpg?raw=true",
"https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/batman.jpg?raw=true"];
const active = ["https://media.giphy.com/media/CHmwA02GQ6aTS/giphy.gif", 
"https://media.giphy.com/media/11ZStfKZSXJN1S/giphy.gif",
"https://i.giphy.com/media/LukAHGCMfxMbK/giphy.webp", 
"https://media.giphy.com/media/tKX6FNU9UGwF2/giphy.gif",
"https://i.giphy.com/media/3o85xpTdNSwazIr23S/giphy.webp",
"https://i.giphy.com/media/C7RCCFdaixA3u/giphy.webp"];

export class CardPortfolio extends React.Component {
    constructor(props){
        super(props)
        this.state = {src: still};
        this.changeGif = this.changeGif.bind(this);
        this.changeGifBack = this.changeGifBack.bind(this);
    }
    changeGif(){
        const swapGif = this.setState.src === active? still: active;
        this.setState({src: swapGif});
        // console.log('this is a hover')
    }
    changeGifBack(){
        const swapGifBack = this.setState.src === still? active: still;
        this.setState({src: swapGifBack}); 
        // console.log('this is a hover exit')
    }
    render() {    
        return (
            <div >
                <CardGroup>
                    <Card className='col-' onMouseEnter={this.changeGif} onMouseLeave={this.changeGifBack} style={{height: '350px'}}>
                        <CardImage src={this.state.src[0]} height='250px'alt="Card image cap" top hover overlay="white-slight"/>
                        
                        <CardBody>
                            <CardTitle tag="h3">Friend Finder App</CardTitle>
                            <CardText>Created a simple friend finder app. Tech Stack: HTML5, CSS3, Node.js, Bootstrap, Express.js</CardText>
                            <Button name="html_setup" color="primary" href="https://friend-finder---.herokuapp.com/">Deployed App</Button>
                        </CardBody>
                    </Card>
                    <Card className='col-' onMouseEnter={this.changeGif} onMouseLeave={this.changeGifBack} style={{height: '350px'}}>
                        <CardImage src={this.state.src[1]} height='250px' alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h3">Eat Da Burger</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary" href="https://eatdaburgerdeployed.herokuapp.com/">Deployed App</Button>
                        </CardBody>
                    </Card>
                    <Card className='col-' onMouseEnter={this.changeGif} onMouseLeave={this.changeGifBack} style={{height: '350px'}}>
                        <CardImage src={this.state.src[2]} height='250px' alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h3">Got Coin App</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary">Deployed App</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className='col-' onMouseEnter={this.changeGif} onMouseLeave={this.changeGifBack} style={{height: '350px'}}>
                        <CardImage src={this.state.src[3]} height='250px'alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h3">Train Schedules</CardTitle>
                            <CardText>Created a simple friend finder app. Tech Stack: HTML5, CSS3, Node.js, Bootstrap, Express.js</CardText>
                            <Button color="primary" href="https://rdrachenberg.github.io/train_schedules/">Deployed App</Button>
                        </CardBody>
                    </Card>
                    <Card className='col-' onMouseEnter={this.changeGif} onMouseLeave={this.changeGifBack} style={{height: '350px'}}>
                        <CardImage src={this.state.src[4]} height='250px' alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h3">GifTastic</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary" href="https://rdrachenberg.github.io/gifTastic/">Deployed App</Button>
                        </CardBody>
                    </Card>
                    <Card className='col-' onMouseEnter={this.changeGif} onMouseLeave={this.changeGifBack} style={{height: '350px'}}>
                        <CardImage src={this.state.src[5]} height='250px' alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h3">Batman App</CardTitle>
                            <CardText>Pulls 10 Batman TV shows from TVmaze.com API.Tech Stack: Node, React, Next.js, Express</CardText>
                        <Button color="primary" href="https://batman-app-pwrvhxafkf.now.sh/">Deployed App</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}