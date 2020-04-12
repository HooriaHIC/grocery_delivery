import React from 'react';
import './HomePage.css';
import SmBoxes from '../../widgets/Cards/SmBoxes';

function HomePage() {
    return (
        <div className="mt-5 p-2">
            <div class="cards">
                <SmBoxes />
            </div>
        </div>
    );
}

export default HomePage;
