import React from "react";
import DealCard from "../../widgets/Cards/DealCard";
import ComponentSlider from "@kapost/react-component-slider";
import "./StorePage.css"
import ProductCard from "../../widgets/Cards/ProductCard";

const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

class StorePage extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="featured-product">
                    <div className="menu-bar">
                        <ComponentSlider
                            renderLeftArrow={renderLeftArrow}
                            renderRightArrow={renderRightArrow}
                        >
                            <div className="menu-item">
                                <DealCard />
                            </div>
                            <div className="menu-item">
                                <DealCard />
                            </div>
                            <div className="menu-item">
                                <DealCard />
                            </div>
                            <div className="menu-item">
                                <DealCard />
                            </div>
                            <div className="menu-item">
                                <DealCard />
                            </div>
                            <div className="menu-item">
                                <DealCard />
                            </div>
                            <div className="menu-item">
                                <DealCard />
                            </div>
                        </ComponentSlider>
                    </div>
                </div>
                <div className="Category">
                    <ProductCard />
                </div>
            </div>
        );
    }
}

export default StorePage;
