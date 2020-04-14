import React, { Component } from 'react';
import {
    Modal
} from 'react-bootstrap';
import "./ShopersModal.css";


class ShopersModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }
    handleShow() {
        this.setState({ show: true })
    }
    handleClose() {
        this.setState({ show: false })
    }
    render(props) {
        return (
            <div>
                <Modal  {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton className="ShoperModalHead">
                    </Modal.Header>
                    <Modal.Body className="ShoperModalBody">

                    </Modal.Body>


                </Modal>
            </div>
        )
    }
}
export default ShopersModal