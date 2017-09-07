import { combineReducers } from 'redux';
import { LOAD_VACANCIES, SEARH_TEXT } from '../actions';

const initialState = {
    vacancies: [],
    searchText: ""
  }

export const vacancies = (state = initialState.vacancies, action) => {
    switch (action.type) {
      case LOAD_VACANCIES:
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

const searchText = (state = initialState.searchText, action) => {
    switch (action.type) {
        case SEARH_TEXT:
            return action.text
        default:
            return state
    }
}

export default combineReducers({
    vacancies,
    searchText
})