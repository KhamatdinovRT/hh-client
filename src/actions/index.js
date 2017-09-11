export const RECIEVE_VACANCIES = 'RECIEVE_VACANCIES';
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const LOADING_STARTED = 'LOADING_STARTED';
export const LOADING_ENDED = 'LOADING_ENDED';

export const recieveVacancies = vacancies => ({
    type:RECIEVE_VACANCIES, 
    vacancies
})

export const loadingStarted = () => ({
    type: LOADING_STARTED
})

export const loadingEnded = () => ({
    type: LOADING_ENDED
})

export const searchVacancies = text => dispatch => {
    dispatch(loadingStarted())
    fetch (`https://api.hh.ru/vacancies?per_page=50&only_with_salary=true&area=113&text=${text}`)
    .then(response => response.json())
    .then(
        json => {
            dispatch(recieveVacancies(json.items))
            dispatch(loadingEnded())
        }
    )
}

export const fetchVacancies = () => dispatch => {
    dispatch(loadingStarted())
    fetch('https://api.hh.ru/vacancies?per_page=50&only_with_salary=true&area=113')
    .then(response => response.json())
    .then(
        json => {
            dispatch(recieveVacancies(json.items))
            dispatch(loadingEnded())
        }
    )
}