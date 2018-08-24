import React from "react"
import '../App.css';
import { Jumbotron} from 'react-bootstrap';
import {Animation} from 'mdbreact'
import { Portfolio } from "./Portfolio";

export class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: '#000000'
        };
    }
    render(){
        return(
            <div>
            <Jumbotron style={{
                paddingBottom: '25px'
            }}>
            < div className='conatiner-fluid'style = {
                {
                    width: "95%",
                    backgroundColor: '#b3b3b3',
                    color: '#000000',
                    display: 'flex', 
                    justifyContent: 'left', 
                    alignItems: 'center', 
                    height: '85%',
                    margin: 'auto',
                    maxWidth: '1650px',
                    marginTop: '25px'
                }

            }>
            < img className='img-fluid' alt = 'Ryan Drachenberg' src = 'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/179336_10150091216446506_86180_n.jpg?_nc_cat=0&oh=f9037530bcf28d41cba0a8f50e9063df&oe=5BF69B06'
                    style={{
                        margin: 'auto',
                        float: 'left',
                        maxWidth: '13%',
                        paddingRight: '5px',
                        marginLeft: '5px'
                    }} 
                />
            
            < Animation type = "hinge" duration = "3s" delay = "1s" >
                < h1 style={{
                    alignItems: 'center',
                    position: 'relative',
                    marginRight: '25px'
                }}>About Me</h1>
            </Animation>
            < Animation type="rollIn" duration="800ms" delay="4s" >
                < h1 style={{
                    alignItems: 'center',
                    float: 'center',
                    marginRight: '50px'
                }}>About Me</h1>
            </Animation>
            </div>
        </Jumbotron>
        <Portfolio />
        </div>
        );
    }
}
