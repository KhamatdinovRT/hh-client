import React from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';

const Statistics = ({vacanciesByCity, vacanciesBySalary}) => {
    const colors = ['#3366CC','#DC3912','#FF9900','#109618','#990099','#3B3EAC','#0099C6', '#2b294c', '#48594c',
    '#9763cc','#DD4477', '#81F037', '#F06E37','#66AA00','#B82E2E','#316395','#994499','#22AA99','#AAAA11', '#7c262b',
    '#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC', '#37A0F0', '#EAF037', '#f442b0', '#ccae63', '#c95706' ]
    
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
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    }
                }
            ]
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
        const {salaryFrom, salaryTo} = vacancy
        const salary = salaryFrom && salaryTo ? salaryTo:
                       salaryFrom ? salaryFrom: salaryTo 
        const key = salary >= 10000 && salary < 25000 ? 'От 10000':
                    salary >= 25000 && salary < 40000 ? 'От 25000':
                    salary >= 40000 && salary < 60000 ? 'От 40000':
                    salary >= 60000 && salary < 80000 ? 'От 60000':
                    salary >= 80000 && salary < 100000 ? 'От 80000':
                    salary >= 100000 && salary < 150000 ? 'От 100000' :"От 150000" 
        return {
             ...obj,
            [key] : (obj[key] || 0) + 1
        }
    }, {}),
})

export default connect(mapStateToProps)(Statistics);