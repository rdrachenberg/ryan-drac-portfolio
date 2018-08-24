import React from 'react'
import {Animation,} from 'mdbreact';
import {CardPortfolio } from './Card';

export class Portfolio extends React.Component{
    render(){
        return(
            < div>
                <Animation type="fadeIn" delay='3.5s'>
                    <img alt="A boat floating on an ocean" className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />
                </Animation>
                < Animation reveal type = "fadeInRight" >
                    <img alt="A view on mountains." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" />
                </Animation>
                <CardPortfolio />>
            </div>
        );
    }
}