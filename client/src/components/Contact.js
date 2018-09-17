import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import '../App.css';
import API from '../utils/API';
import axios from 'axios';
import {List} from '../components/List';
import {ListItem} from '../components/ListItem';
// import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

export class FormsPage extends React.Component  {
    
        state = {
            user:[],
                name: '',
                email: '',
                subject: '',
                message: '',
        }

        // onSubmit = this.onSubmit.bind(this);
        // onChange = this.onChange.bind(this);
        
        
        componentDidMount(){
            this.loadUsers();
        }

        loadUsers = () => {
            API.getUsers()
            .then(res => 
                this.setState({ user: res.data, name: "", email: "", subject: "", message: "" }))
                .catch((err => console.log(err)));
        }

        deleteUser = id => {
            API.deleteUser(id)
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
        }

        findOneUser = id => {
        API.getUser(id)
        // API.getUser(this.props.match.params.id)
        .then(res => this.setState({ user: res.data }))
        .then(res => console.log(this.state.user))
        .catch(err => console.log(err));
        }

        onChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
        }

        onSubmit = (e) => {
            e.preventDefault();

            const {name, email, subject, message} = this.state;

            console.log('name submitted: ' + this.state.name);
            console.log('email submitted: ' + this.state.email);
            console.log('subject submitted: ' + this.state.subject);
            console.log('message submitted: ' + this.state.message);

            const data = new FormData(this.state);

            axios.post(`http://localhost:8080/api/user`, {name, email, subject, message, 
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type" : "application/json"
                }     
            })
            .then(res => {
                // console.log(dbModel)
                // res.redirect("http://localhost:3000/")
            // console.log(res);
            // console.log(res.data);
            // console.log({data});
            console.log(this.state);
            })
            .catch(error => {
                    console.log(error)
            });
        }

    render() {
        const {name, email, subject, message} = this.state 
        return(
            <div>
                <Container>
                    <Row>
                    <Col md="6">
                        <img className="contact-img"src="https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/contact-me.jpg?raw=true" alt="contact-us"/>
                    </Col>
                    <Col md="6">
                        <form onSubmit={this.onSubmit}>
                            <p className="h4 text-center mb-4">Contact Me</p>
                            <label htmlFor="name" className="grey-text">Your name</label>
                            <input type="text" name="name" value={name} onChange={this.onChange} id="name" className="form-control" autoComplete='name' required/>
                            <br/>
                            <label htmlFor="email" className="grey-text">Your email</label>
                            <input type="email" name="email" value={email} onChange={this.onChange} id="email" className="form-control" autoComplete='email' required/>
                            <br/>
                            <label htmlFor="subject" className="grey-text">Subject</label>
                            <input type="text" name="subject" value={subject} onChange={this.onChange} id="subject" className="form-control"/>
                            <br/>
                            <label htmlFor="message" className="grey-text">Your message</label>
                            <textarea type="text" name="message" value={message}  onChange={this.onChange} id="message" className="form-control" rows="3" required></textarea>
                            <div className="text-center mt-4">
                                <button className="btn btn-outline-warning" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
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