import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

export default function ChartShops({ adminInfo }) {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState([]);
    const [cat, setCat] = useState([]);

    const fetchCatg = async () => {
        try {
            let res = await axios.get('http://localhost:8000/api/categories');
            setCat(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchChartShops = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/products/get/count');
            setChartData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createChart = () => {
        if (!chartRef.current || !chartData.length || !cat.length) {
            // Exit early if chartRef, chartData, or cat is not available yet
            return;
        }

        let x = [];
        cat.forEach(element => {
            x.push(element.name);
        });
        const labels = x;

        const config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Product Count',
                    data: chartData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        if (chartRef.current.chart) {
            // If chart already exists, update it
            chartRef.current.chart.data.labels = config.data.labels;
            chartRef.current.chart.data.datasets[0].data = config.data.datasets[0].data;
            chartRef.current.chart.update();
        } else {
            // If chart doesn't exist, create it
            chartRef.current.chart = new Chart(chartRef.current, config);
        }
    };

    useEffect(() => {
        fetchChartShops();
        fetchCatg();
    }, []);

    useEffect(() => {
        createChart();
    }, [chartData, cat]); // Update the chart when chartData or cat changes

    return (
        <canvas ref={chartRef} width={200} />
    );
}
