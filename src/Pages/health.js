import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from 'axios';

// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function Health() {  // Component name should start with uppercase
    const [users, setUsers] = useState([]);

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
            <img
              src="health.png"
              alt="Health"
              width={70}
              height={60}
              className="mx-3"
            />
            System Health 
            </h1>
            <Bar data={data} options={options} />
        </div>
    );
}
