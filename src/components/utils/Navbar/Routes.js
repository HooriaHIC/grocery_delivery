import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import SingleStorePage from "../../Pages/Store/StorePage";
import HomePage from '../../Pages/Home/HomePage';
import NotFound from '../../Pages/404/NotFound';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Routes.css";
import FormModal from "../../widgets/Modals/FormModal/FormModal";


const createHistory = require("history").createBrowserHistory;
const history = createHistory()


class Routes extends Component {

    loginModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }

    onLoginClick = () => {
        this.showModal();
    }

    render() {
        return (
            <div>
                <FormModal ref={this.loginModalRef}></FormModal>
                <AppBar position="static" className="appbar">
                    <Toolbar className="NavbarTop">
                        <div className='row w-100'>
                            <div className="col-4 LogoOrBack">
                                <section className="leftBox shopname ml-4">
                                    <Typography className="typography">

                                        <button className="backButton" onClick={history.goBack}><i className="fa fa-chevron-left"></i> <span className="backText">Back</span></button>
                                    </Typography>
                                </section>
                            </div>
                            <div className="col-4 centered">
                                <section className="centerBox">
                                    <Typography className="typography">
                                        <b>Stores</b>
                                    </Typography>
                                </section>
                            </div>
                            <div className="col-4 righted">
                                <section className="rightBox">
                                    <Typography className="typography">
                                        <Button className="primary btn AccountBtn" onClick={this.onLoginClick}>
                                            <img alt="user account avatar" src={require('C:/Users/hooriaishtiaq/workspace/Mernstack/grocery_delivery/src/assets/images/placeholder_account.png')} className="buttonImage" /> Account
                                    </Button>
                                        <Button className="primary btn" onClick={this.onLoginClick}>
                                            <i className="fa fa-cart-plus cart"></i>
                                        </Button>

                                    </Typography>
                                </section>
                            </div>
                        </div>
                    </Toolbar>

                    <Toolbar>
                        <div className='row w-100'>
                            <div className='col-lg-4'>
                                <Button onClick={this.onLoginClick} className="primary postalCodeBtn" >
                                    <img alt="home icon" src={require('C:/Users/hooriaishtiaq/workspace/Mernstack/grocery_delivery/src/assets/images/homeicon.png')} className="buttonImage" /> <b>M4b 146, CA</b> <i className="fa fa-chevron-down downIco"></i>
                                </Button>
                            </div>
                            <div className="col-lg-4 centered p-1 pl-4" >
                                <div className="searchContainer">
                                    <i className="fa fa-search searchIcon"></i>
                                    <input className="searchBox" type="search" name="search" placeholder="Search Stores" />
                                </div>
                            </div>
                            <div className="col-lg-4" >
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/store" component={SingleStorePage} />
                    <Route component={NotFound} />
                </Switch>

            </div >
        )
    }
}

export default Routes