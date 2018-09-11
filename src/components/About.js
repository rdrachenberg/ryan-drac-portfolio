import React from 'react';
// import { withRouter } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import {CardPortfolio} from './Card'
import {Button} from 'mdbreact'

// this also works with react-router-native
export class About extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        showComponent: false,
    };
    this.show = this.show.bind(this);
    }
    show(){
    this.setState({showComponent:true});
    }
    
    render(){
        return(
            <div>
                <h1 onClick={this.show}> this is the About Return!</h1>
                <Button onClick={this.show}></Button>
                {this.state.showComponent ? 
                <CardPortfolio /> :
                null
            }
            </div>
        );
    }
}
