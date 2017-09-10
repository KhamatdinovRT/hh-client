export const RECIEVE_VACANCIES = 'RECIEVE_VACANCIES';
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const LOADING_STARTED = 'LOADING_STARTED';
export const LOADING_ENDED = 'LOADING_ENDED';

export const recieveVacancies = (vacancies) => ({
    type:RECIEVE_VACANCIES, 
    vacancies
})

export const loadingStarted = () => ({
    type: LOADING_STARTED
})

export const loadingEnded = () => ({
    type: LOADING_ENDED
})

export const searchText = (text) => ({
    type:SEARCH_TEXT, 
    text
})

export const fetchVacancies = (url) => dispatch=> {
        dispatch(loadingStarted())
        fetch(url)
        .then(response => response.json())
        .then (
                json => {
                    dispatch(recieveVacancies(json.items)),
                    setTimeout(() => dispatch(loadingEnded()), 200)
                }
          )
}