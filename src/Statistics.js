import React, { Component } from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';

const Statistics = ({vacanciesByCity, vacanciesBySalary}) => {
    const colors = ['#3366CC','#DC3912','#FF9900','#109618','#990099','#3B3EAC','#0099C6','#DD4477','#66AA00',
    '#B82E2E','#316395','#994499','#22AA99','#AAAA11','#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC']
    
    const dataVacanciesByCity = {
        labels: Object.keys(vacanciesByCity),
        datasets: [{
            data: Object.keys(vacanciesByCity).map(item => vacanciesByCity[item]),
            backgroundColor: colors,
            hoverBackgroundColor: colors
        }]
    };
    
    const dataVacanciesBySalary = {
        labels: Object.keys(vacanciesBySalary),
        datasets: [{
            label: "Количество вакансий",
            backgroundColor: colors,
            data: Object.keys(vacanciesBySalary).map(item => vacanciesBySalary[item]),
        },
    ]
    };

    const options = {
        legend: {
            display: false,
        }
    }

    return (
        <div>
            <h1>Количество вакансий по городам</h1>
            <Doughnut data={dataVacanciesByCity}/>
            <hr/>
            <h1>Распределение количества вакансий по зарплате</h1> 
            <Bar data={dataVacanciesBySalary} options={options}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    vacanciesByCity: state.vacancies.reduce((obj, vacancy) => {
        return {
             ...obj,
            [vacancy.area] : (obj[vacancy.area] || 0) + 1
        }
    }, {}),
    vacanciesBySalary: state.vacancies.reduce((obj, vacancy) => {
        const key = vacancy.salaryFrom > 6000 && vacancy.salaryFrom < 25000 ?  '6000-25000':
                    vacancy.salaryFrom > 25000 && vacancy.salaryFrom < 40000 ? '25000-40000':
                    vacancy.salaryFrom > 40000 && vacancy.salaryFrom < 75000? '40000-75000':
                    vacancy.salaryFrom > 75000 && vacancy.salaryFrom < 100000 ? '75000-100000': ">100000"
        return {
             ...obj,
            [key] : (obj[key] || 0) + 1
        }
    }, {}),
})

export default connect(mapStateToProps)(Statistics);