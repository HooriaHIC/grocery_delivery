import React from 'react';
import "./Card.css"
import { Link } from "react-router-dom";
export default function StoreCard() {

    return (
        <Link to="/store">
            <div className="card">
                <div className="StoreCard">
                    <img alt="store logo's" src="https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png_blue.png" />
                    <span className="badge badge-secondary">Shoppers occupied</span>
                </div>
            </div>
        </Link>
    );
}
