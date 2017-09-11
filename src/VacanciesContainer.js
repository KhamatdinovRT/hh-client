import React from 'react';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import {searchVacancies} from './actions';
import VacanciesList from './VacanciesList';
import './App.css';

const VacanciesContainer = ({isLoading, vacancies, searchVacancies}) =>  {
    return (
        <div>
            <SearchBar searchVacancies={searchVacancies}/>
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
    vacancies: state.vacancies,
    isLoading: state.isLoading
})

export default connect(mapStateToProps, {searchVacancies})(VacanciesContainer);