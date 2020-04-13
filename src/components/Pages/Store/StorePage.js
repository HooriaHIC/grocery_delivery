import React from "react";
import DealCard from "../../widgets/Cards/DealCard";
import ComponentSlider from "@kapost/react-component-slider";
import "./StorePage.css"
import ProductCard from "../../widgets/Cards/ProductCard";
import { Nav, Col, Row } from "react-bootstrap"

const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

class StorePage extends React.Component {
    render() {
        return (
            <div className="page ">
                <div className="featured-product">
                    <div className="menu-bar">
                        <ComponentSlider
                            renderLeftArrow={renderLeftArrow}
                            renderRightArrow={renderRightArrow}
                        >
                            <div className="menu-item StorePageSlide">
                                <DealCard />
                            </div>
                            <div className="menu-item StorePageSlide">
                                <DealCard />
                            </div>
                            <div className="menu-item StorePageSlide">
                                <DealCard />
                            </div>
                            <div className="menu-item StorePageSlide">
                                <DealCard />
                            </div>
                            <div className="menu-item StorePageSlide">
                                <DealCard />
                            </div>
                            <div className="menu-item StorePageSlide">
                                <DealCard />
                            </div>
                            <div className="menu-item StorePageSlide">
                                <DealCard />
                            </div>
                        </ComponentSlider>
                    </div>
                </div>
                <div className="categorySection mb-5">
                    <Nav className="CategoryHead">
                        <Row className="w-100">
                            <Col xs={5} md={6}>
                                <Nav.Item>
                                    <h5>Fruits and Vegetable</h5>
                                </Nav.Item>
                            </Col>
                            <Col xs={6} md={6} className="navItemRight">
                                <Nav.Item>
                                    <a href="/" >See All <i className="fa fa-chevron-right"></i></a>
                                </Nav.Item>
                            </Col>
                        </Row>
                    </Nav>

                    <div className="menu-bar">
                        <ComponentSlider
                            renderLeftArrow={renderLeftArrow}
                            renderRightArrow={renderRightArrow}
                        >
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                            <div className="menu-item CategorySlide">
                                <div className="Category p-2">
                                    <ProductCard />
                                </div>
                            </div>
                        </ComponentSlider>
                    </div>
                </div>
            </div>
        );
    }
}

export default StorePage;
