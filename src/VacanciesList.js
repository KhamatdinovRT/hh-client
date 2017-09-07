import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import './VacanciesList.css';
import Vacancie from './Vacancie';
import {searchText} from './actions';

const VacanciesList = ({vacancies, positions, onInput, searchText}) => {
    const handleChange = (e, newValue) => {
        setTimeout(()=>searchText(newValue), 1000)
    }

    const SearchBar = () => (
        <Paper className="search-block" zDepth={1}>
            <TextField
                hintText="Поиск"
                //filter={AutoComplete.fuzzyFilter}
                //dataSource={positions}
                //maxSearchResults={5}
                fullWidth={true}
                underlineShow={false}
                onChange={handleChange}
            />
        </Paper>
    )

    const list = vacancies.length > 0 && vacancies!=undefined? 
        vacancies.map((vacancy, i) => {
            const img = vacancy.logo_urls? vacancy.logo_urls.original:""; 
            return <Vacancie 
                key={i}
                name={vacancy.name}
                img={img}
                responsibility={vacancy.responsibility}
                area={vacancy.area}
            />    
    }): ""
    return (
        <div className="list-container">
            <SearchBar/>
            {list}
        </div>
    )
}

const mapStateToProps = (state) => ({
    positions: state.vacancies.map(vacancy => vacancy.name),
    vacancies: state.vacancies.filter(vacancy => vacancy.name.search(new RegExp(state.searchText))>=0)
})

export default connect(mapStateToProps, {searchText})(VacanciesList)