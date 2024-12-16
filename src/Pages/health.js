import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { useTranslation } from 'react-i18next';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from 'axios';

import "./health.css"

// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function Health() {  
    const [users, setUsers] = useState([]);
    const{t}=useTranslation();
    useEffect(() => {
        axios.get('http://localhost:8000/getUsers')  // Node.js Express Server
            .then(response => {
                console.log("Fetched data:", response.data); // Debugging
                setUsers(response.data);
            })
            .catch(err => console.log("Error fetching data:", err));
    }, []);

    const data = {
        labels: users.map(user => user.Time),  // x-axis labels
        datasets: [
            {
                label: 'Battery',
                data: users.map(user => user.Battery),  // y-axis data
                backgroundColor: 'orange',
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
                type: 'category',  // Set the x-axis type as 'category' explicitly
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
            <strong>
            <img
              src="health.png"
              alt="Health"
              width={70}
              height={60}
              className="mx-3"
            />
            {t("sh")}
            </strong>
            </h1>
            <div className='charthealth'>
            <Bar data={data} options={options}  />
            </div>
            
        </div>
    );
}
