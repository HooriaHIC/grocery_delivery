import React from 'react';
import "./Card.css"
import {
    Card, Button
} from "react-bootstrap";

export default function ProductCard() {

    return (

        <Card style={{ width: '15rem' }}>
            <Card.Img style={{ width: '8rem', borderRadius: '10px / 10px' }} variant="top" src="https://previews.123rf.com/images/jchizhe/jchizhe1808/jchizhe180800041/106615127-colorful-fruit-pattern-bananas-over-blue-background-square-crop-top-view-pop-art-design-creative-sum.jpg" />
            <Card.Body>
                <Card.Title className="ProductName">Banana</Card.Title>
                <Card.Text className="ProductPrice">CA$0.67</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card >

    );
}
