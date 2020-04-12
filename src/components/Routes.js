import React from "react"
import { Route, Switch } from "react-router-dom"
import SmBoxes from "./SmBoxes";
import HomePage from './HomePage';
import NotFound from './NotFound';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from "../serviceWorker"
const history = createHistory()

const Routes = () => {

    return (

        <div>
            <AppBar position="static" className="appbar">
                <Toolbar className="NavbarTop">
                    <div className='row w-100'>
                        <div className="col-lg-4">
                            <section className="leftBox shopname ml-4">
                                <Typography variant="h5" className="typography">
                                    <button onClick={history.goBack}>Back</button>
                                </Typography>
                            </section>
                        </div>
                        <div className="col-lg-4 centered">
                            <section className="centerBox">
                                <Typography variant="h6" className="typography">
                                    <b>Stores</b>
                                </Typography>
                            </section>
                        </div>
                        <div className="col-lg-4 righted">
                            <section className="rightBox">
                                <Typography className="typography">
                                    <Button variant="h3" data-toggle="modal" data-target="#staticBackdrop" className="primary btn" >
                                        <img alt="user account avatar" src={require('../assets/images/placeholder_account.png')} className="buttonImage" /> Account
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
                            <Button variant="h3" data-toggle="modal" data-target="#staticBackdrop" className="primary btn" >
                                <img alt="home icon" src={require('../assets/images/homeicon.png')} className="buttonImage" /> <b>M4b 146, CA</b> <i class="fa fa-chevron-down downIco"></i>
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
                <Route path="/stores" component={SmBoxes} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes