import React from 'react';
import './HomePage.css';
import StoreCard from '../../widgets/Cards/StoreCard';

function HomePage() {
    return (
        <div className="mt-5 p-2 mb-5">
            <div className="cards">
                <a href="/store/featured">
                    <StoreCard />
                </a>
            </div>
        </div>
    );
}

export default HomePage;
