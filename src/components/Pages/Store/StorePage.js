import React, { Component } from 'react';
import './StorePage.css';
import DealCard from '../../widgets/Cards/DealCard';

import ScrollMenu from 'react-horizontal-scrolling-menu';

const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { name } = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '', className: 'fa fa-chevron-left arrows' });
const ArrowRight = Arrow({ text: '', className: 'fa fa-chevron-right arrows' });

const selected = 'item1';

class StorePage extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = [
            <DealCard />,
            <DealCard />,
            <DealCard />,
            <DealCard />,
            <DealCard />
        ];

        return (
            <div className="ScrollView mt-5">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}

export default StorePage;