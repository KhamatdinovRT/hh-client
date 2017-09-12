import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { API_URL } from './index';

const SearchBar = ({ fetchVacancies, searchText, textToSearch }) => {
    const handleChange = (e, newValue) => {
        setTimeout(() => {
            searchText(newValue)
            fetchVacancies(API_URL + `&text=${newValue}`)
        }, 500)
    }
    
    return (
        <Paper className='search-block' zDepth={1}>
            <TextField
                hintText='Поиск вакансий'
                fullWidth={true}
                underlineShow={false}
                onChange={handleChange}
                defaultValue={textToSearch}
            />
        </Paper>
    )
}

export default SearchBar;