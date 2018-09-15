import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import '../App.css';
import API from '../utils/API';
import {List} from '../components/List';
import {ListItem} from '../components/ListItem';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

export class DisplayAPI extends React.Component  {
    
        state = {
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

        //     console.log('name submitted: ' + this.state.name);
        //     console.log('email submitted: ' + this.state.email);
        //     console.log('subject submitted: ' + this.state.subject);
        //     console.log('message submitted: ' + this.state.message);

        //     const data = new FormData(this.state);

        //     axios.post(`http://localhost:8080/api/user`, {name, email, subject, message, 
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-Type" : "application/json"
        //         }     
        //     })
        //     .then(res => {
        //         // console.log(dbModel)
        //         // res.redirect("http://localhost:3000/")
        //     // console.log(res);
        //     // console.log(res.data);
        //     // console.log({data});
        //     console.log(this.state);
        //     })
        //     .catch(error => {
        //             console.log(error)
        //     });
        // }

    render() {
        const {name, email, subject, message} = this.state 
        return(
            <div>
                <Container>
                    <Row>
                    <Col md="6">
                        <form onSubmit={this.onSubmit}>
                            <p className="h4 text-center mb-4">Add a Message</p>
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
                                <button className="btn btn-danger" type="submit">Post<i className="fa fa-paper-plane-o ml-2"></i></button>
                            </div>
                        </form>
                    </Col>
                    
                    {this.state.user.length ? (
                    <List>
                        {this.state.user.reverse().map(user => (
                            <ListItem key={user.id}>
                            <span onClick={() => this.findOneUser(user._id)}>
                                {/* <Link  to="api/user"> */}
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
                    < Col md = "6" >
                        <List>
                            <ListItem>
                                <Link to="/api-render">
                                    <div className="container-fluid">
                                        < div className = "api-render">
                                            {this.state.user.name}
                                        </div>
                                        <div className = "api-render"> 
                                            {this.state.user.email}
                                        </div>
                                        <div className = "api-render"> 
                                            {this.state.user.subject}
                                        </div>
                                        <div className = "api-render"> 
                                            {this.state.user.message}
                                        </div>
                                    </div>
                                </Link>
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