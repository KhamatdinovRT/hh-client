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
            const {salary, employer} = vacancy
            return ({
                name: vacancy.name,
                employer: vacancy.employer.name,
                img: employer.logo_urls? employer.logo_urls[90] : "",
                area: vacancy.area.name,
                salaryFrom: salary? salary.from : null,
                salaryTo: salary? salary.to : null,
                responsibility: vacancy.snippet.responsibility
            })
        })
      default:
        return state
    }
}

export const vacanciesByCity = (state={}, action) => {
    switch (action.type) {
        case RECIEVE_VACANCIES:
            return action.vacancies.reduce((obj, item) => {
                return {
                     ...obj,
                    [item.area.name] : (obj[item.area.name] || 0) + 1
                }
            }, {})
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
    searchText,
    vacanciesByCity
})