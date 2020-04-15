import React, { Component } from 'react';
import {
    Modal, Image, Row, Col
} from 'react-bootstrap';
import SmProductCard from "../../Cards/SmProductCard";
import "./productModal.css";
import ComponentSlider from "@kapost/react-component-slider";

const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

class ProductModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.productHandleShow = this.productHandleShow.bind(this);
        this.productHandleClose = this.productHandleClose.bind(this);
        this.state = {
            show: false
        }
    }
    productHandleShow() {
        this.setState({ show: true })
    }

    productHandleClose() {
        this.setState({ show: false })
    }
    render(props) {

        return (
            <div>
                <Modal  {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} onHide={this.productHandleClose}>
                    <Modal.Header closeButton className="productModalHead">
                    </Modal.Header>
                    <Modal.Body className="productModalBody">
                        <Row >
                            <Col xs={6} md={4}>

                            </Col>
                            <Col md={4}>
                                <Image src="https://previews.123rf.com/images/jchizhe/jchizhe1808/jchizhe180800041/106615127-colorful-fruit-pattern-bananas-over-blue-background-square-crop-top-view-pop-art-design-creative-sum.jpg" className="img-fluid" />
                            </Col>
                            <Col xs={6} md={4}>
                            </Col>
                        </Row>
                        <div className="w-100 ModalproductName">
                            <h3>Banana</h3>
                        </div>

                        <Row className="InfoRow p-2 pt-4">
                            <Col xs={6} md={12} className="InfoCol">
                                <h5>Information</h5>
                            </Col>

                            <Col xs={6} md={6} className="InfoCol">
                                <p className="smallText">Price</p>
                            </Col>
                            <Col xs={6} md={6} className="InfoColRight" >
                                <p className="smallText">CA$0.67/kg</p>
                            </Col>
                            <Col xs={6} md={6} className="InfoCol">
                                <p className="smallText">Price per piece</p>
                            </Col>
                            <Col xs={6} md={6} className="InfoColRight" >
                                <p className="smallText">CA$0.10/pc</p>
                            </Col>
                            <Col xs={6} md={6} className="InfoCol">
                                <p className="smallText">Package</p>
                            </Col>
                            <Col xs={6} md={6} className="InfoColRight" >
                                <p className="smallText">Price per kg, 1 piece: 170 g aprox.</p>
                            </Col>
                            <Col xs={6} md={12} className="InfoCol">
                                <h6>Product Description</h6>
                            </Col>
                            <Col md={12} className="InfoCol">
                                <p className="smallText">Soft, sweet and delicious, the banana is a popular choice for breakfast, snacks or any time of the day. The vibrant yellow peel provides natural protection while storing, and is a great indicator of when the fruit is ready to eat!</p>
                            </Col>
                            <Col md={12} className="InfoCol">
                                <h6>Related</h6>
                            </Col>
                            <Col md={12}>
                                <div className="menu-bar">
                                    <ComponentSlider
                                        renderLeftArrow={renderLeftArrow}
                                        renderRightArrow={renderRightArrow}
                                    >
                                        <div className="menu-item RelatedProductSlide">
                                            <SmProductCard />
                                        </div>

                                    </ComponentSlider>
                                </div>

                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="productModalFoot">
                        <a className="addToCartLink" href="/">Add To Cart</a>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}
export default ProductModal