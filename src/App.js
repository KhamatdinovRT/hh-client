import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {connect} from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import VacanciesContainer from './VacanciesContainer'
import Header from './Header';
import Statistics from './Statistics';
import './App.css';

const App = () => {
    return (
        <main className="app-container">
            <Header/>
            <Switch>
                <Route exact path='/' component={VacanciesContainer}/>
                <Route path="/statistics" component={Statistics}/>
            </Switch>
        </main>
    )
}

export default App;