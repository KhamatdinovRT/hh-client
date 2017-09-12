import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { API_URL } from './index';

const SearchBar = ({ fetchVacancies, searchText, textToSearch }) => {
    const throttle = (callback, ms) => {
        var timer = null;
        return function () {
            let args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback.apply(this, args);
            }, ms);
        };
    };
      
    const handleChange = throttle((e, newValue) => {
            searchText(newValue)
            fetchVacancies(API_URL + `&text=${newValue}`)
        }, 500)
    
    
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