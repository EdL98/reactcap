import { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/getUsers')  // Node Js Express Server
            .then(response => {
                console.log("Fetched data:", response.data); // Debugging
                setUsers(response.data);
            })
            .catch(err => console.log("Error fetching data:", err));
    }, []);

    return (
        <div className="w-100 vh-30 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <p>Number of users fetched: {users.length}</p> {/* Debugging */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Reading</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.Location}</td>
                                    <td>{user.Readings}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
;
}
