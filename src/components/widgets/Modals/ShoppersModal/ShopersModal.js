import React, { Component } from 'react';
import {
    Modal
} from 'react-bootstrap';
import "./ShopersModal.css";


class ShopersModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShoperShow = this.handleShoperShow.bind(this);
        this.handleShoperClose = this.handleShoperClose.bind(this);
        this.state = {
            show: false
        }
    }
    handleShoperShow() {
        this.setState({ show: true })
    }
    handleShoperClose() {
        this.setState({ show: false })
    }
    render(props) {
        return (
            <div>
                <Modal  {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} onHide={this.handleShoperClose}>
                    <Modal.Header closeButton className="ShoperModalHead">
                        <h4>Costco</h4>
                    </Modal.Header>
                    <Modal.Body className="ShoperModalBody">
                        <h6>ABOUT COSTCO</h6>
                        <div className="ModalShoperName">
                            <p>Costco borns in 1976 with more than 20 stores nationwide</p>
                        </div>
                        <p class="descriptionStore">
                            Cornershop is an independent business and is not affiliated with Costco.</p>
                        <h6 className="mt-5">NEXT DELIVERY TIME
</h6>
                        <div className="ModalShoperName">
                            <p>Shoppers occupied

</p>

                        </div>
                        <p className="descriptionStore pb-5">
                            Availability can change depending on demand in your area and the amount of items you add to your cart.

</p>
                    </Modal.Body>


                </Modal>
            </div>
        )
    }
}
export default ShopersModal