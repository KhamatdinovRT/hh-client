import React from 'react';
import './VacanciesList.css';
import Vacancy from './Vacancy';

const VacanciesList = ({vacancies}) => {
    const list = vacancies.length > 0 ? 
        vacancies.map((vacancy, i) => {
            const img = vacancy.logo_urls? vacancy.logo_urls.original:""; 
            return <Vacancy 
                        key={i}
                        name={vacancy.name}
                        img={img}
                        responsibility={vacancy.responsibility}
                        area={vacancy.area}
                        employer={vacancy.employer}
                        salary={vacancy.salary}
                    />    
    }): <h1>Не найдено подходящих вакансий</h1>
    return (
        <div>
            {list}
        </div>
    )
}

export default VacanciesList;