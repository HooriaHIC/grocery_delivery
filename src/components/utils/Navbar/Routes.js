import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import SingleStorePage from "../../Pages/Store/StorePage";
import HomePage from '../../Pages/Home/HomePage';
import NotFound from '../../Pages/404/NotFound';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Routes.css";
import AislesPage from "../../Pages/Aisles/Aisles";
import OrdersPage from "../../Pages/Orders/Orders";
import FormModal from "../../widgets/Modals/FormModal/FormModal";
import { NavTab } from "react-router-tabs";
import "../../../../node_modules/react-router-tabs/styles/react-router-tabs.css";
import ShopersModal from "../../widgets/Modals/ShoppersModal/ShopersModal";
import { Row } from "react-bootstrap";
//import chargeFeeModal from "../../widgets/Modals/ChargeFeeModal/chargeFeeModal";



const createHistory = require("history").createBrowserHistory;
const history = createHistory()
var Text = <button className="backButton" onClick={history.goBack}><i className="fa fa-chevron-left"></i> <span id="BackText" className="backText">Back</span></button>;
var TabsShowOrNo = (<div className="col-md-4 pl-3 TabsShowORNo ">

    <NavTab to="/store/featured">Featured</NavTab>
    <NavTab to="/store/aisles">Aisles</NavTab>
    <NavTab to="/store/orders">Orders</NavTab>

</div>);


if (history.location.pathname === '/') {
    Text = <h5>Cornershop</h5>
    TabsShowOrNo = <div className="col-lg-4" ></div>
}

class Routes extends Component {
    loginModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }
    onLoginClick = () => {
        this.showModal();
    }

    ShopersModalRef = ({ handleShoperShow }) => {
        this.showShoperModal = handleShoperShow;
    }
    onShopersClick = () => {
        this.showShoperModal();
    }

    //ChargeModalRef = ({ handleChargeShow }) => {
    // this.showChargeModal = handleChargeShow;
    //}
    // onChargeClick = () => {
    //  this.showChargeModal();
    //  }
    render() {
        return (
            <div>
                {/*<chargeFeeModal ref={this.ChargeModalRef}></chargeFeeModal>*/}
                <FormModal ref={this.loginModalRef}></FormModal>
                <ShopersModal ref={this.ShopersModalRef}></ShopersModal>

                <AppBar position="sticky" className="appbar">
                    <Toolbar className="NavbarTop">
                        <div className='row w-100'>
                            <div className="col-4 LogoOrBack">
                                <section className="leftBox shopname ml-4">
                                    <Typography className="typography">
                                        {Text}
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
                                            <img alt="user account avatar" src={require('../../../assets/images/placeholder_account.png')} className="buttonImage" /> Account
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
                                {(() => {
                                    //Javascript for changing buttons
                                    switch (history.location.pathname) {
                                        case "/": return <Button onClick={this.onLoginClick} className="primary postalCodeBtn" >
                                            <img alt="home icon" src={require('../../../assets/images/homeicon.png')} className="buttonImage" /> <b>M4b 146, CA</b> <i className="fa fa-chevron-down downIco"></i>
                                        </Button>;
                                        default: return (
                                            <Button onClick={this.onShopersClick} className="primary postalCodeBtn" >
                                                <img alt="home icon" src={require('../../../assets/images/time.png')} className="buttonImage" /> <b style={{ textTransform: 'capitalize' }}>Shoppers Occupied</b>
                                            </Button>

                                        );
                                    }
                                })()}

                            </div>
                            <div className="col-lg-4 centered p-1 pl-4" >
                                <div className="searchContainer">
                                    <i className="fa fa-search searchIcon"></i>
                                    <input className="searchBox" type="search" name="search" placeholder="Search Stores" />
                                </div>
                            </div>
                            {TabsShowOrNo}
                        </div>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path='/store/orders/' component={OrdersPage} />
                    <Route path='/store/aisles/' component={AislesPage} />
                    <Route path="/store/featured" component={SingleStorePage} />
                    <Route component={NotFound} />
                </Switch>
            </div >
        )
    }
}

export default withRouter(Routes)