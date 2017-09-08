import { combineReducers } from 'redux';
import { 
    RECIEVE_VACANCIES, 
    SEARCH_TEXT, 
    LOADING_STARTED } from '../actions';

const initialState = {
    vacancies: [],
    isLoading: false,
    searchText: ""
  }

export const vacancies = (state = initialState.vacancies, action) => {
    switch (action.type) {
      case RECIEVE_VACANCIES:
        return action.vacancies.map((vacancy) => {
            return ({
                name: vacancy.name,
                employer: vacancy.employer.name,
                logo_urls: vacancy.employer.logo_urls,
                area: vacancy.area.name,
                salary: vacancy.salary,
                responsibility: vacancy.snippet.responsibility
            })
        })
      default:
        return state
    }
}

export const isLoading = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return true
        case 'LOADING_ENDED':
            return false
        default:
            return state
    }
}

const searchText = (state = initialState.searchText, action) => {
    switch (action.type) {
        case SEARCH_TEXT:
            return action.text
        default:
            return state
    }
}

export default combineReducers({
    vacancies,
    isLoading,
    searchText
})