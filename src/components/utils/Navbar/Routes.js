import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import SingleStorePage from "../../Pages/Store/StorePage";
import HomePage from '../../Pages/Home/HomePage';
import NotFound from '../../Pages/404/NotFound';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./navbar.css";
import LoginModal from "../../widgets/Modals/LoginModal/LoginModal";


const createHistory = require("history").createBrowserHistory;
const history = createHistory()

class Routes extends Component {

    render() {
        return (
            <div>
                <AppBar position="static" className="appbar">
                    <Toolbar className="NavbarTop">
                        <div className='row w-100'>
                            <div className="col-lg-4">
                                <section className="leftBox shopname ml-4">
                                    <Typography className="typography">
                                        <button className="backButton" onClick={history.goBack}><i className="fa fa-chevron-left"></i> Back</button>
                                    </Typography>
                                </section>
                            </div>
                            <div className="col-lg-4 centered">
                                <section className="centerBox">
                                    <Typography className="typography">
                                        <b>Stores</b>
                                    </Typography>
                                </section>
                            </div>
                            <div className="col-lg-4 righted">
                                <section className="rightBox">
                                    <Typography className="typography">
                                        <Button data-toggle="modal" data-target="#staticBackdrop" className="primary btn" onClick={(<LoginModal />)}>
                                            <img alt="user account avatar" src={require('C:/Users/hooriaishtiaq/workspace/Mernstack/grocery_delivery/src/assets/images/placeholder_account.png')} className="buttonImage" /> Account
                                    </Button>
                                        <i class="fa fa-cart-plus cart"></i>
                                    </Typography>
                                </section>
                            </div>
                        </div>
                    </Toolbar>

                    <Toolbar>
                        <div className='row w-100'>
                            <div className='col-lg-4'>
                                <Button data-toggle="modal" data-target="#staticBackdrop" className="primary btn" >
                                    <img alt="home icon" src={require('C:/Users/hooriaishtiaq/workspace/Mernstack/grocery_delivery/src/assets/images/homeicon.png')} className="buttonImage" /> <b>M4b 146, CA</b> <i class="fa fa-chevron-down downIco"></i>
                                </Button>
                            </div>
                            <div className="col-lg-4 centered" >
                                <div class="searchContainer">
                                    <i class="fa fa-search searchIcon"></i>
                                    <input class="searchBox" type="search" name="search" placeholder="Search Stores" />
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