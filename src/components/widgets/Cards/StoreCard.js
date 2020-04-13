import React from 'react';
import "./Card.css"

export default function StoreCard() {

    return (

        <div className="card">
            <div className="StoreCard">
                <img alt="store logo's" src="https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png_blue.png" />
                <span className="badge badge-secondary">Shoppers occupied</span>
            </div>
        </div>

    );
}
