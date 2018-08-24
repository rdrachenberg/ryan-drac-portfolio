import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';

export class CardPortfolio extends React.Component {
    render() {
        return (
                <CardGroup>
                    <Card className='col-md-4'>
                        <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h5">Panel title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">read more</Button>
                        </CardBody>
                    </Card>
                    <Card className='col-md-4'>
                        <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h5">Panel title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary">read more</Button>
                        </CardBody>
                    </Card>
                    <Card className='col-md-4'>
                        <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Card image cap" top hover overlay="white-slight"/>
                        <CardBody>
                            <CardTitle tag="h5">Panel title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary">read more</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
        )
    }
}