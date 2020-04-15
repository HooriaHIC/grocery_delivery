import React, { Component } from 'react';
import {
    Modal
} from 'react-bootstrap';
import "./FormModal.css";

class FormModal extends Component {
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
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} onHide={this.handleClose} >

                    <Modal.Body >
                        <h3>Cornorshop</h3>
                        <p className="mt-3 slogan">We deliver your groceries in one hour</p>
                        <div className="Auth-btn mt-5">
                            <button className="login-btn" >
                                Log in
  </button>
                            <button className="signup-btn">
                                Sign up
  </button>
                            <button size="lg" block className="signuplater-btn">
                                Sign up later
  </button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default FormModal