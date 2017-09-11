import React from 'react';
import './VacanciesList.css';
import Vacancy from './Vacancy';

const VacanciesList = ({ vacancies }) => {
    const list = vacancies.length > 0 ?
        vacancies.map((vacancy, i) => {
            const { salaryFrom, salaryTo } = vacancy
            const salary = salaryFrom && salaryTo ? `${salaryFrom}-${salaryTo} руб.`
                : salaryFrom ? `От ${salaryFrom} руб.`
                    : salaryTo ? `До ${salaryTo} руб.`
                        : ''
            return (
                <Vacancy
                    key={i}
                    name={vacancy.name}
                    img={vacancy.img}
                    responsibility={vacancy.responsibility}
                    area={vacancy.area}
                    employer={vacancy.employer}
                    salary={salary}
                />
            )
        }) : <h1 className='not-found'>Не найдено подходящих вакансий</h1>
    return (
        <div>
            {list}
        </div>
    )
}

export default VacanciesList;