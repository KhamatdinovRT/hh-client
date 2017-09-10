import React, { Component } from 'react';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import {fetchVacancies, searchText} from './actions';
import VacanciesList from './VacanciesList';
import './App.css';

class VacanciesContainer extends Component {
    componentDidMount() {
        this.props.fetchVacancies('https://api.hh.ru/vacancies?per_page=50&only_with_salary=true&area=113')
    }
    render() {
        return (
            <div>
                <SearchBar searchText={this.props.searchText}/>
                {this.props.isLoading ?     
                <CircularProgress style={{margin:'0 auto', display:'block'}} 
                        color={'black'} 
                        size={60} 
                        thickness={7} />
                :   
                <VacanciesList vacancies={this.props.vacancies}/>
                }
            </div>
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

export default connect(mapStateToProps, {fetchVacancies, searchText}) (VacanciesContainer);