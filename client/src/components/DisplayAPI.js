import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import '../App.css';
import API from '../utils/API';
import {List} from '../components/List';
import {ListItem} from '../components/ListItem';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';


export class DisplayAPI extends React.Component  {
    
        state = {
            toUpdate: false,
            toHide: false,
            user:[],
                name: '',
                email: '',
                subject: '',
                message: '',

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

        deleteUser = id => {
            API.deleteUser(id)
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
        }

        updateUser = (id) => {
            API.updateUser(id, {
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message
            })
            .then(res => this.findOneUser())
            .then(res => this.loadUsers())
            .then(res => console.log('the Update button has been clicked'))
            .catch(err => console.log(err));
            
        }

        findOneUser = id => {
        API.getUser(id)
        .then(res => this.setState({ user: res.data, toHide: true}))
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
            if (this.state.name && this.state.email) {
                API.saveUser({
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
        if (this.state.toHide === true){
            return( 
                <div>
                    <Row>
                        < Col md = "11" >
                            < List className = "list-container-one-return" >
                                <ListItem key={user._id}>
                                    <Link to="/api-render">
                                            <Col md="10">
                                                <form onSubmit={this.onSubmit} className="form-api">
                                                <p className="h4 text-center mb-4">Edit Record</p>
                                                <label htmlFor="name" className="grey-text">Edit name</label>
                                                <input type="text" placeholder= {this.state.user.name} name="name" value={this.state.name} onChange={this.onChange} id="name" className="form-control" autoComplete='name' required/>
                                                <br/>
                                                <label htmlFor="email" className="grey-text">Edit email</label>
                                                <input type="email" placeholder= {this.state.user.email} name="email" value={this.state.email} onChange={this.onChange} id="email" className="form-control" autoComplete='email' required/>
                                                <br/>
                                                <label htmlFor="subject" className="grey-text">Edit Subject</label>
                                                <input type="text" placeholder= {this.state.user.subject} name="subject" value={this.state.subject} onChange={this.onChange} id="subject" className="form-control"/>
                                                <br/>
                                                <label htmlFor="message" className="grey-text">Edit message</label>
                                                <textarea type="text" placeholder= {this.state.user.message} name="message" value={this.state.message}  onChange={this.onChange} id="message" className="form-control" rows="3" required></textarea>
                                                <div className="text-center mt-4">
                                                </div>
                                                </form>
                                            </Col>
                                    </Link>
                                    <UpdateButton key={user._id} onClick={() => this.updateUser(user._id)} />
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </div>
            )
        };
        return(
            <div>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="hidden">
                            <form onSubmit={this.onSubmit} className="form-api">
                            < p className = "h2 text-center mb-2" > CRUD Operations </p>
                                <p className="h3 text-center mb-3">Add a Record</p>
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
                                    <button className="btn btn-elegant" type="submit">Create Record<i className="fa fa-paper-plane-o ml-2"></i></button>
                                </div>
                            </form>
                            </div>
                        </Col>
                        
                    {this.state.user.length ? (
                    <List>
                        < p className = "h2 text-center mb-2" > Click on record to update </p>
                        {this.state.user.reverse().map(user => (
                            <ListItem key={user.id}>
                            <span onClick={() => this.findOneUser(user._id)}>
                                <strong>
                                    <div>
                                        Name: {user.name},
                                    </div>
                                    < div >
                                        Email: {user.email},
                                    </ div>
                                    <div>
                                        Subject: {user.subject}
                                    </div>
                                </strong>
                                </span>
                                {/* </Link> */}
                                <DeleteButton onClick={() => this.deleteUser(user._id)} />
                            </ListItem>
                        ))}
                    </List>
                    ) : (
                    < Col md = "12" >
                        <List>
                            <ListItem key={user._id}>
                                <Link to="/api-render">
                                    < div className = "list-container-one-return" >
                                        < div className = "api-render">
                                            Name: {this.state.user.name}
                                        </div>
                                        <div className = "api-render"> 
                                            Email: {this.state.user.email}
                                        </div>
                                        <div className = "api-render"> 
                                            Subject: {this.state.user.subject}
                                        </div>
                                        <div className = "api-render"> 
                                            Message: {this.state.user.message}
                                        </div>
                                        <Col md="12">
                                            <form onSubmit={this.onSubmit} className="form-api">
                                            <p className="h4 text-center mb-4">Edit Record</p>
                                            <label htmlFor="name" className="grey-text">Edit name</label>
                                            <input type="text" placeholder= {this.state.user.name} name="name" value={this.state.name} onChange={this.onChange} id="name" className="form-control" autoComplete='name' required/>
                                            <br/>
                                            <label htmlFor="email" className="grey-text">Edit email</label>
                                            <input type="email" name="email" value={this.state.email} onChange={this.onChange} id="email" className="form-control" autoComplete='email' required/>
                                            <br/>
                                            <label htmlFor="subject" className="grey-text">Edit Subject</label>
                                            <input type="text" name="subject" value={this.state.subject} onChange={this.onChange} id="subject" className="form-control"/>
                                            <br/>
                                            <label htmlFor="message" className="grey-text">Edit message</label>
                                            <textarea type="text" name="message" value={this.state.message}  onChange={this.onChange} id="message" className="form-control" rows="3" required></textarea>
                                            <div className="text-center mt-4">
                                                {/* <button className="btn btn-elegant" type="submit">Post<i className="fa fa-paper-plane-o ml-2"></i></button> */}
                                            </div>
                                            </form>
                                        </Col>
                                    </div>
                                </Link>
                                <UpdateButton key={user._id} onClick={() => this.updateUser(user._id)} />
                            </ListItem>
                        </List>
                    </Col>
                    )}
                    </Row>
                </Container>
            </div>
        );
    }
};

export default DisplayAPI;