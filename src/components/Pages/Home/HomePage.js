import React from 'react';
import './HomePage.css';
import StoreCard from '../../widgets/Cards/StoreCard';

function HomePage() {
    return (
        <div className="mt-5 p-2">
            <div className="cards">
                <StoreCard />
            </div>
        </div>
    );
}

export default HomePage;
