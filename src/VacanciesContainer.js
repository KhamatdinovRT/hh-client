import React from 'react';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import {fetchVacancies, searchText} from './actions';
import VacanciesList from './VacanciesList';
import './App.css';

const VacanciesContainer = ({isLoading, vacancies, searchText}) =>  {
    return (
        <div>
            <SearchBar searchText={searchText}/>
            {isLoading ?     
            <CircularProgress style={{margin:'0 auto', display:'block'}} 
                    color={'black'} 
                    size={60} 
                    thickness={7} />
            :   
            <VacanciesList vacancies={vacancies}/>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    vacancies: state.vacancies.filter(vacancy => {
        const validText = state.searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
        return vacancy.name.search(new RegExp(validText, 'gi'))>=0
    }),
    isLoading: state.isLoading
})

export default connect(mapStateToProps, {fetchVacancies, searchText})(VacanciesContainer);