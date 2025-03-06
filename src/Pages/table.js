import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './table.css'
import {useDownloadExcel} from 'react-export-table-to-excel';
import {CSVLink} from 'react-csv';


export default function Table() {
    const [users, setUsers] = useState([]);
    const{t}=useTranslation();
    const tableref=useRef(null);
    const {onDownload}=useDownloadExcel({
        currentTableRef:tableref.current,
        filename:`Water_Reading_Data`,
        
    })

    const csvHeaders = [
        { label: "Index", key: "Index" },
        { label: "Date", key: "Date" },
        { label: "Time", key: "Time" },
        { label: "Location", key: "Location" },
        { label: "Reading", key: "Readings" }
    ];
    


    useEffect(() => {
        // Function to fetch data
        const fetchData = () => {
            axios.get('https://backendserver3-hv88.onrender.com/getUsers') // Node.js Express Server
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

    return (
        <div className="w-100 vh-30 d-flex justify-content-center align-items-center">
            <div className="w-50">
            <h1>
            <img
              src="table.png"
              alt="Data table"
              width={70}
              height={60}
              className="mx-3"
            /><strong>
            {t("WaterReadingTable")}
            </strong>
            </h1>
                <p>{t("noinfo")}: {users.length}</p> {/* Debugging */}
                
                <section className="ButtonsOnly">
                <button className="ExcelButton" onClick={onDownload}>Export to Excel</button>
                <CSVLink
                    data={users}
                    headers={csvHeaders}
                    filename="Water_Reading_Data.csv"
                    className="btn btn-primary"style={{ marginLeft: '30px' }}
                >
                    Export to CSV
                </CSVLink>
                </section>
                <table className="table" ref={tableref}>
                    <thead>
                        <tr>
                            <th><center>Index</center></th>
                            <th><center>Date</center></th>
                            <th><center>Time</center></th>
                            <th><center>Location</center></th>
                            <th><center>Reading (m3) </center></th>
                            <th><center>Consumption (m3)</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => (
                                <tr key={user._id}>
                                    <td><center>{user.Index}</center></td>
                                    <td><center>{user.Date}</center></td>
                                    <td><center>{user.Time}</center></td>
                                    <td><center>{user.Location}</center></td>
                                    <td><center>{user.Readings}</center></td>
                                    <td><center>{index > 0 ? -(users[index - 1].Readings - user.Readings) : 0}</center></td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
           
        </div>
    );
}
