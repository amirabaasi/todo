import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


// Registering chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const TodoPieChart = () => {

    const { t } = useTranslation()

    // دسترسی به state todos از Redux
    const todos = useSelector(state => state.todos.todos)

    const datetodo = todos.map(todo => todo.completedOn).filter(date => date !== '')
    // const completedgroup = [...new Set(datetodo)]

    // console.log(completedgroup)









    // محاسبه تعداد کارهای انجام شده و انجام نشده
    const completedTodos = todos.filter(todo => todo.isCompleted === true).length;
    const pendingTodos = todos.filter(todo => todo.isCompleted === false).length;
    const totalTodos = todos.length;

    // داده‌های نمودار Pie
    const data = {
        labels: [t("all"), t('not-completed'), t('completed')],
        datasets: [
            {
                data: [completedTodos, pendingTodos, totalTodos],
                backgroundColor: ['#4caf50', '#f44336', '#2196f3'], // رنگ‌ها برای انجام شده، انجام نشده و کل
                hoverOffset: 4,
            },
        ],
    };

    // تنظیمات نمودار Pie
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const { label, raw } = tooltipItem;
                        return `${label}: ${raw} tasks`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <h2>{t("pie-chart-title")}</h2>
            <Pie data={data} options={options} />
        </div>
    );
};

export default TodoPieChart;
