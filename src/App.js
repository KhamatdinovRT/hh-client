import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchVacancies } from './actions';
import { API_URL } from './index';
import VacanciesContainer from './VacanciesContainer'
import Header from './Header';
import Statistics from './Statistics';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchVacancies(API_URL)
    }

    render() {
        return (
            <main className='app-container'>
                <Header />
                <Switch>
                    <Route exact path='/' component={VacanciesContainer} />
                    <Route path='/statistics' component={Statistics} />
                </Switch>
            </main>
        )
    }
}

export default connect(null, { fetchVacancies }, null, { pure: false })(App);