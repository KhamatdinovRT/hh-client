export const LOAD_VACANCIES = 'LOAD_VACANCIES';
export const SEARH_TEXT = 'SEARH_TEXT';

export const loadVacancies = (vacancies) => ({
    type:LOAD_VACANCIES, 
    vacancies
})

export const searchText = (text) => ({
    type:SEARH_TEXT, 
    text
})