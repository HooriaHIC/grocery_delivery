import React, { Component } from 'react';
import {
    Modal
} from 'react-bootstrap';
import "./chargeFeeModal.css";


class chargeFeeModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChargeShow = this.handleChargeShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }
    handleChargeShow() {
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
export default chargeFeeModal