import React from 'react';
import './Aisles.css';
import { Row, Col, Container } from "react-bootstrap"
import AislesCard from "../../widgets/Cards/AislesCard"
function AislesPage() {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col xs={12} md={4}>
                    <AislesCard />
                </Col>
            </Row>
        </Container>
    );
}

export default AislesPage;
