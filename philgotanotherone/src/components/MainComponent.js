import React, { Component } from 'react';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { MERCHANDISE } from '../shared/Merchandise';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state= {
            merchandise: MERCHANDISE,
        }
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                </Switch>
                <Directory />
                <Footer />
            </div >
        );
    }
}

export default Main;