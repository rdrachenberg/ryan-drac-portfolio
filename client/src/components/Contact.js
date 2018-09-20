import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import '../App.css';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';


export class FormsPage extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            toHome: false,
                name: '',
                email: '',
                subject: '',
                message: '',
        };
    }
        // onSubmit = this.onSubmit.bind(this);
        // onChange = this.onChange.bind(this);

        onChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
        }

        onSubmit = (e) => {
            e.preventDefault();

            if (this.state.name && this.state.email) {
            API.saveUser({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
            })
            .then(this.setState(() => ({
                toHome: true
            })))
            .then(res => console.log("hello"))
            .catch(err => console.log(err));
            }
            
        };

    render() {
        if (this.state.toHome === true){
            return( <Redirect to='/' />
            )
        };
        const {name, email, subject, message} = this.state 
        return(
            <div>
                <Container>
                    <Row>
                    <Col md="6">
                        <img className="contact-img"src="https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/contact-me.jpg?raw=true" alt="contact-us"/>
                    </Col>
                    <Col md="6">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <p className="h4 text-center mb-4">Contact Me</p>
                            <label htmlFor="name" className="grey-text">Your name</label>
                            <input type="text" name="name" value={name} onChange={this.onChange.bind(this)} id="name" className="form-control" autoComplete='name' required/>
                            <br/>
                            <label htmlFor="email" className="grey-text">Your email</label>
                            <input type="email" name="email" value={email} onChange={this.onChange.bind(this)} id="email" className="form-control" autoComplete='email' required/>
                            <br/>
                            <label htmlFor="subject" className="grey-text">Subject</label>
                            <input type="text" name="subject" value={subject} onChange={this.onChange.bind(this)} id="subject" className="form-control"/>
                            <br/>
                            <label htmlFor="message" className="grey-text">Your message</label>
                            <textarea type="text" name="message" value={message}  onChange={this.onChange.bind(this)} id="message" className="form-control" rows="3" required></textarea>
                            <div className="text-center mt-4">
                                <button className="btn btn-outline-primary" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
                            </div>
                        </form>
                    </Col>
                    </Row>
                    <Row>
                    <Col md="12">
                        <img className="inbox-img" src = "https://media.giphy.com/media/xT1R9ZORSvL6jtqOeQ/giphy.gif"
                        alt = "contact-us" />
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default FormsPage;