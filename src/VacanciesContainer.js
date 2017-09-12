import React from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchVacancies, searchText } from './actions';
import VacanciesList from './VacanciesList';

const VacanciesContainer = ({ isLoading, vacancies, fetchVacancies, searchText, textToSearch }) => {
    const style = {
        margin: '0 auto',
        display: 'block'
    }

    return (
        <div>
            <SearchBar fetchVacancies={fetchVacancies} searchText={searchText} textToSearch={textToSearch} />
            {isLoading ?
                <CircularProgress style={style}
                    color={'black'}
                    size={60}
                    thickness={7} />
                :
                <VacanciesList vacancies={vacancies} />
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    vacancies: state.vacancies,
    isLoading: state.isLoading,
    textToSearch: state.textToSearch
})

export default connect(mapStateToProps, { fetchVacancies, searchText })(VacanciesContainer);