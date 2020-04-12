import React from 'react';
import "./Card.css"

export default function StoreCard() {

    return (

        <div class="card">
            <div className="StoreCard">
                <img alt="store logo's" src="https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png_blue.png" />
                <span class="badge badge-secondary">Shoppers occupied</span>
            </div>
        </div>
    );
}
