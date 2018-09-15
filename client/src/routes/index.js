import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import FormsPage from './Contact';
import APIRender from './APIRender';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portfolio" render={
                () => {
                    return(<div><Portfolio /></div>);
                }
            }/>
            <Route exact path="/contact-me" render={
                () => {
                    return(<div><FormsPage /></div>);
                }
            }/>
            <Route exact path="/api-render" render={
                () => {
                    return(<div><APIRender /></div>);
                }
            }/>
        </Switch>
    </BrowserRouter>
)