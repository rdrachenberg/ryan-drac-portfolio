import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import '../App.css';
import API from '../utils/API';
import {List} from './List';
import {ListItem} from './ListItem';
import UpdateButton from './UpdateButton';

export class UpdateAPI extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            user:[],
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }
        
        componentDidMount(){
            this.loadUsers();
        }

        loadUsers = () => {
            API.getUsers()
            .then(res => 
                this.setState({ user: res.data, name: "", email: "", subject: "", message: "" }))
                .catch((err => console.log(err)));
        }

        updateUser = id => {
            this.findOneUser(id)
            API.updateUser(id)
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
            const {name, value} = e.target;
            this.setState({
                [name] : value
            });
        }

        onSubmit = (e) => {
            e.preventDefault();
            if (this.state.id) {
                API.updateUser({
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message
                })
                .then(res => this.loadUsers())
                .catch(err => console.log(err));
            }
        };
        
    render() {
        const {user, name, email, subject, message} = this.state 
        return(
            <div>
                <Container>
                    <Row>
                    < Col md = "6" >
                        <List>
                            {this.state.user.map(user =>(
                            <ListItem key={this._id}>
                                    <div className="container-fluid">
                                        < div className = "api-render">
                                            ID: {user.id}
                                        </div>
                                        < div className = "api-render">
                                            Name: {user.name}
                                        </div>
                                        <div className = "api-render"> 
                                            Email: {user.email}
                                        </div>
                                        <div className = "api-render"> 
                                            Subject: {user.subject}
                                        </div>
                                        <div className = "api-render"> 
                                            Message: {user.message}
                                        </div>
                                    </div>
                                <UpdateButton key={this._id} onClick={() => this.updateUser(this._id)} />
                            </ListItem>
                            ))}
                        </List>
                    </Col>
                    )}
                     <Col md="6">
                        <form onSubmit={this.onSubmit} className="form-api">
                            <p className="h4 text-center mb-4">Add a Message</p>
                            <label htmlFor="name" className="grey-text">Your name</label>
                            <input type="text" name="name" placeholder={name} value={name} onChange={this.onChange} id="name" className="form-control" autoComplete='name' required/>
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
                                <button className="btn btn-elegant" type="submit">Post<i className="fa fa-paper-plane-o ml-2"></i></button>
                            </div>
                        </form>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default UpdateAPI;