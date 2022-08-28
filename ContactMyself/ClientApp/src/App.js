import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';
import Layout from './components/Layout';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
            </Layout>
        );
    }
}