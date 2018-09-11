import React from "react"
import '../App.css';
import {Animation} from 'mdbreact'


export class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: '#000000'
        };
    }
    render(){
        return(
            <div className='row'>
                <div id="main-container" className="container">
                    <section className="main-section">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/179336_10150091216446506_86180_n.jpg?_nc_cat=0&oh=f9037530bcf28d41cba0a8f50e9063df&oe=5BF69B06"
                                className="ryan-img" id="bioPic" alt="Ryan-Drachenberg" />
                            </div>
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-4">
                                < Animation type = "hinge" duration = "5s" delay = "1s" >
                                < h1 className="about-me-text">About Me</h1>
                                </Animation>                    
                                < Animation type="rollIn" duration="800ms" delay="6s" >
                                < h1 className="about-me-text">About Me</h1>
                                </Animation>
                            </div>
                        </div>
                    {/* <!-- first paragraph --> */}
                    < p > Ever since I can remember I’ ve been fascinated by technology.This fascination has led me to pursue a career in IT and given me the drive to become a full stack web developer.I believe the future is in web development and it is thrilling to see applications come to life.Let’ s build something awesome together!</p>
                    {/* <!-- second paragraph --> */}
                    <p>Finance and Technology have been prevalent throughout my life. I've had the fortune to run multiple companies and freelanced
                    IT services before really diving into computer programming. Being experienced in both fields has been extremely valuable
                    in my work. I take extreme ownership and pride in my work and take challenges with stride.</p>
                    {/* <!-- third paragraph --> */}
                    <p>I currently work as a freelance full stack developer. I am always looking for new freelance opportunities. Feel free to contact
                    me via e-mail at ryanDrachenberg@gmail.com I look forward to any future relationships and opportunities.</p>
                    <strong>
                        <h2>Applications Built</h2>
                    </strong>
                    <h3>
                        <a href="https://batman-app-pwrvhxafkf.now.sh" target="_Blank" rel="noopener noreferrer" id="got-coin-link">Batman App</a>
                    </h3>
                    <h5>
                        <ul>
                        <li>This is a simple React Batman app that allows users to pull the 10 most recent Batman TV shows from TVmaze.com API.</li>
                        <li>Tech Stack- Node, React, Next.js, Express, Now.</li>
                        </ul>
                    </h5> 
                    <h3>
                        <a href="https://rdrachenberg.github.io/gotCoin/" target="_Blank" rel="noopener noreferrer" id="got-coin-link">gotCoin</a>
                    </h3> 
                    <h5>
                        <ul>
                        <li>Created a simple application that allows users to get real-time data on crypto currencies and equities markets. Also gives the ability to link or create new user accounts on CoinBase.</li>
                        <li>Allows users to easily link their CoinBase account to our application.</li>
                        <li>Create new user accounts on CoinBase to buy cryptocurrencies.</li>
                        <li>Lead developer of four.</li>
                        <li> Tech Stack - HTML5, CSS3, jQuery, JavaScript, Bootstrap, API, MySQL </li>
                        </ul>
                    </h5>
                    <h3>
                        <a href="https://rdrachenberg.github.io/gifTastic/" target="_Blank" rel="noopener noreferrer" id="gif-tastic-link">GifTastic </a>
                    </h3> 
                    <h5>
                        <ul>
                        <li>An application that allows users to query giphy.com's API and return 12 search relevant gifs.</li>
                        < li > Full Stack Developer. </li>
                        <li>Tech Stack - HTML5, CSS3, jQuery, JavaScript, Bootstrap, API, Firebase. </li>
                        </ul>
                    </h5>
                    <h3>Experience</h3>
                        <h4>TSS Investment Group, Inc</h4> 
                        <h4>
                        <i>Web Development</i>
                        </h4>
                    <h5>
                        <ul>
                        <li>Developed multiple websites for clients.</li>
                        <li>Projects included digital campaigns, on site banners, websites and/or landing pages, segmented
                            email, social media, & print for clients in the medical, investment, and real estate professions.</li>
                        </ul>
                    </h5>
                    <h3>Additional Work Experience</h3>
                    <h5>
                        <ul>
                        <li>Consultant at TSS Investment Group Inc.				5/2015 - Present</li>
                        <li>Consultant at The Smile Studio™, Inc.				12/2010 - Present</li>
                        <li>Director at The Florida Gulf Coast REIA, LLC 			12/2013 - 12/2016</li>
                        <li>Acquisitionist at USA M & D, LLC 		9/2012 - 12/2013</li>
                        <li>Real Estate Acquisitionist Forever Wealth Club, LLC 		1/2006 - 2/2008</li>
                        <li>Currency Trader at Premiere Trade, LLC 				1/2004 - 5/2005 </li>
                        </ul>
                    </h5>
                    <h3>Education</h3>
                    <h4>University of Central Florida</h4>
                    <i>
                        <h5>Full Stack Web Development</h5>
                    </i>
                    <div id="imgDiv" className="col-md-2">
                        <iframe title="credential" frameBorder="0" scrolling="no" src="https://credly.com/sharedembed/14881985" width="180" height="230"></iframe>
                    </div>
                    <div className="col-md-9">
                    <p>Those who receive this badge have demonstrated a fundamental working knowledge of HTML, CSS, JavaScript, jQuery, Firebase,
                        Node.js, Express.js, MySQL, MongoDB, Mongoose, & React.js. They have displayed their ability to work with diverse teams
                        on demanding time-lines to build fully functional web applications from start to finish. In addition, they have exhibited
                        the skills necessary to learn new technologies & resolve issues independently. This program consists of 250 contact hours
                        or 25.0 CEUs.</p>
                        
                    <p>Completion of the following: 24-week program, 250 contact hours plus individual & group projects utilizing HTML, CSS, JavaScript,
                        jQuery, Firebase, Node.js, MySQL, MongoDB, Mongoose, and React.js.</p>
                    <p>Best Regards,</p>
                    <p>Ryan Drachenberg</p>
                    </div>
                    </section>
                </div>      
            </div>
        );
    }
}
