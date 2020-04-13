import React from 'react';
import "./Card.css";
import { Card } from "react-bootstrap"


export default function SmProductCard() {

    return (

        <Card className="bg-dark text-white mt-2" style={{ width: '5rem' }}>
            <Card.Img src="https://previews.123rf.com/images/jchizhe/jchizhe1808/jchizhe180800041/106615127-colorful-fruit-pattern-bananas-over-blue-background-square-crop-top-view-pop-art-design-creative-sum.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title></Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}
