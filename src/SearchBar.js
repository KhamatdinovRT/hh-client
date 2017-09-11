import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const SearchBar = ({searchVacancies}) => {
    const handleChange = (e, newValue) => {
        setTimeout(() => searchVacancies(newValue), 200)
    }

    return (
        <div><Paper className="search-block" zDepth={1}>
            <TextField
                hintText="Поиск вакансий"
                fullWidth={true}
                underlineShow={false}
                onChange={handleChange}
            />
        </Paper>
        </div>
    )
}

export default SearchBar;