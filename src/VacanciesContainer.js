import React from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchVacancies } from './actions';
import VacanciesList from './VacanciesList';

const VacanciesContainer = ({ isLoading, vacancies, fetchVacancies }) => {
    const style = {
        margin: '0 auto',
        display: 'block'
    }

    return (
        <div>
            <SearchBar fetchVacancies={fetchVacancies} />
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
    isLoading: state.isLoading
})

export default connect(mapStateToProps, { fetchVacancies })(VacanciesContainer);