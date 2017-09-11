import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const SearchBar = ({ fetchVacancies }) => {
    const handleChange = (e, newValue) => {
        setTimeout(() => fetchVacancies(`https://api.hh.ru/vacancies?per_page=50&only_with_salary=true&area=113&text=${newValue}`), 500)
    }
    
    return (
        <Paper className='search-block' zDepth={1}>
            <TextField
                hintText='Поиск вакансий'
                fullWidth={true}
                underlineShow={false}
                onChange={handleChange}
            />
        </Paper>
    )
}

export default SearchBar;