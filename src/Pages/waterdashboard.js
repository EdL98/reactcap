import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import axios from 'axios';
import './waterdashboard.css'
// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);



export default function Dashboard() {  
    const [users, setUsers] = useState([]);
    const{t}=useTranslation();
    useEffect(() => {
        // Function to fetch data
        const fetchData = () => {
            axios.get('http://localhost:8000/getUsers') // Node.js Express Server
                .then(response => {
                    console.log("Fetched data:", response.data); // Debugging
                    setUsers(response.data);
                })
                .catch(err => console.log("Error fetching data:", err));
        };

        // Initial data fetch
        fetchData();

        // Set up interval for refreshing data every second
        const interval = setInterval(() => {
            fetchData();
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: users.map(user => user.Time),  // x-axis labels
        datasets: [
            {
                label: 'Readings',
                data: users.map(user => user.Readings),  // y-axis data
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                type: 'category', 
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Readings'
                },
                beginAtZero: true
            }
        }
    };
    return (
        <div>
            <h1>
            <img
              src="charts.png"
              alt="Water Reading"
              width={70}
              height={60}
              className="mx-3"
            /><strong>
            {t("wrd")}
            </strong>
            </h1>
            <div className='chartwater'>
            <Bar data={data} options={options} />
            </div>
        </div>
    );
}
