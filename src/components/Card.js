import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

export class CardPortfolio extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button href="#">Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}