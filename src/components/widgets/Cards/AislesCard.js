import React from 'react';
import "./Card.css";
import { ListGroup, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function AislesCard() {
    return (
        <ListGroup className="AislesCard">
            <Navbar bg="dark" className="AislesCardHead w-100 mb-2 pb-1">
                <Navbar.Brand>
                    <h6>Care And Beauty</h6>
                </Navbar.Brand>
            </Navbar>
            <ListGroup.Item>
                <Link to="/">Makeup</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/">Beauty</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/">Spa</Link>
            </ListGroup.Item>
        </ListGroup >
    );
}
