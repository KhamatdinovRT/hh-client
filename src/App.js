import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadVacancies} from './actions';
import VacanciesList from './VacanciesList';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('https://api.hh.ru/vacancies?per_page=50').then(
      response=> response.json()
    ).then (
      json => this.props.loadVacancies(json.items)
    )
  }
  render() {
    return (
      <main>
        <VacanciesList vacancies={this.props.vacancies}/>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  vacancies: state.vacancies
})

export default connect(mapStateToProps, {loadVacancies}) (App);