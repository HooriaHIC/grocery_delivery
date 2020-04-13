import React, { Component } from 'react';
import "./Card.css"
import {
    Card
} from "react-bootstrap";
import ProductModal from '../../widgets/Modals/ProductModal/productModal'

class ProductCard extends Component {
    MoreModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }

    onMoreClick = () => {
        this.showModal();
    }
    render() {
        return (
            <div>
                <ProductModal ref={this.MoreModalRef}></ProductModal>
                <Card style={{ width: '13rem' }} className="productCard">

                    <Card.Body className=" mb-1 ProductCardBody" onClick={this.onMoreClick}>
                        <Card.Img className="ml-3 m-2" style={{ width: '8rem', borderRadius: '10px / 10px' }} src="https://previews.123rf.com/images/jchizhe/jchizhe1808/jchizhe180800041/106615127-colorful-fruit-pattern-bananas-over-blue-background-square-crop-top-view-pop-art-design-creative-sum.jpg" />
                        <Card.Title className="ProductName">Banana</Card.Title>
                        <Card.Text className="ProductPrice">CA$0.67</Card.Text>
                        <Card.Text className="ProductDesc">price per kg, 1 piece...</Card.Text>
                    </Card.Body>
                    <button variant="primary" className="AddToCartBtn">Add</button>
                </Card >
            </div>

        );
    }
}

export default ProductCard