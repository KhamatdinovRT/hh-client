import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchVacancies, searchText} from './actions';
import VacanciesList from './VacanciesList';
import CircularProgress from 'material-ui/CircularProgress';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchVacancies('https://api.hh.ru/vacancies?per_page=50')
    }
  render() {
        return (
            <main className="list-container">
                <SearchBar searchText={this.props.searchText}/>
                {this.props.isLoading ?     
                    <CircularProgress style={{margin:'0 auto'}} color={'black'} size={60} thickness={7} />
                :   
                    <VacanciesList vacancies={this.props.vacancies}/>
                }
            </main>
        )
  }
}

const mapStateToProps = (state) => ({
    vacancies: state.vacancies.filter(vacancy => {
        const validText = state.searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
        return vacancy.name.search(new RegExp(validText, 'gi'))>=0
    }),
    isLoading: state.isLoading
})

export default connect(mapStateToProps, {fetchVacancies, searchText}) (App);