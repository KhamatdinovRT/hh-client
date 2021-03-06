import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

const Statistics = ({ vacanciesByCity, vacanciesBySalary }) => {
    const colors = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#2b294c', '#48594c',
        '#9763cc', '#DD4477', '#81F037', '#F06E37', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#7c262b',
        '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC', '#37A0F0', '#EAF037', '#f442b0', '#ccae63', '#c95706']

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
        }]
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
            }]
        }
    }

    return (
        <div>
            <h1>Количество вакансий по городам</h1>
            <Doughnut data={dataVacanciesByCity} />
            <hr />
            <h1>Распределение количества вакансий по зарплате</h1>
            <Bar data={dataVacanciesBySalary} options={options} />
        </div>
    )
}

const salariesRange = [10000, 25000, 40000, 60000, 80000, 100000, 150000]

const getVacanciesByCity = vacancies => vacancies.reduce((obj, vacancy) => {
    return {
        ...obj,
        [vacancy.area]: (obj[vacancy.area] || 0) + 1
    }
}, {})

const getKey = (salariesRange, salary) => {
    for (let i = 0; i < salariesRange.length; i++) {
        let firstRange = salariesRange[0]
        let lastRange = salariesRange[salariesRange.length - 1]
        let currentRange = salariesRange[i]
        let nextRange = salariesRange[i + 1]
        if (salary >= currentRange && salary < nextRange)
            return 'От ' + currentRange
        else if (salary >= lastRange)
            return 'От ' + lastRange
        else if (salary < firstRange)
            return 'До ' + firstRange
    }
}

const getVacanciesBySalary = vacancies => vacancies.reduce((obj, vacancy) => {
    const { salaryFrom, salaryTo } = vacancy
    const salary = salaryFrom && salaryTo ? salaryTo :
        salaryFrom ? salaryFrom : salaryTo
    const key = getKey(salariesRange, salary)
    return {
        ...obj,
        [key]: (obj[key] || 0) + 1
    }
}, {})

const mapStateToProps = (state) => ({
    vacanciesByCity: getVacanciesByCity(state.vacancies),
    vacanciesBySalary: getVacanciesBySalary(state.vacancies)
})

export default connect(mapStateToProps)(Statistics);