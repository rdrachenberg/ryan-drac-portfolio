import React from 'react'
import {CardPortfolio } from './Card';

export class Portfolio extends React.Component{
    render(){
        return(
            <div className="row" >
                <div className='portfolio'>
                    <CardPortfolio />
                </div>
            </div>
        );
    }
}