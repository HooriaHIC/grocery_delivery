import React from 'react';
import '../App.css';
import SmBoxes from './SmBoxes';

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
