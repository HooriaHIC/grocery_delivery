import React from 'react';
import './HomePage.css';
import StoreCard from '../../widgets/Cards/StoreCard';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="mt-5 p-2 mb-5">
            <div className="cards">
                <Link to="/store/featured">
                    <StoreCard />
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
