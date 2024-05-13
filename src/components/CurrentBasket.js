import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import basket from '../assets/basket.png';
import "../components/CurrentBasket.css";

function CurrentBasket() {
    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="card-image" variant="top" src={basket} />
            <Card.Body className="card-body">
                <Card.Title>Basket Contents</Card.Title>
                <Card.Text>
                    Summary of your order with Star Wars Coffee
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Dark Roast Wookie Sunset 1KG £29.99 </ListGroup.Item>
                <ListGroup.Item>Medium Roast Java the Hutt 1KG £29.99</ListGroup.Item>
                <ListGroup.Item>Light Roast The Mochalorian 1KG £29.99</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Exit</Card.Link>
                <Card.Link href="#">Clear Basket</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CurrentBasket;