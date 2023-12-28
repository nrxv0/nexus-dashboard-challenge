import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";
import "../styles/table.css";
const DashboardTable = () =>{

    const initialUsers = [
        { id: 1, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31' },
        { id: 2, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31'},
        { id: 3, name: 'John Doe',status:'Done', StartDate: '2023-12-25', EndDate:'2023-12-31' },
        { id: 4, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31'},
        { id: 5, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31' },
        { id: 6, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31'},
        { id: 7, name: 'John Doe',status:'Cancel', StartDate: '2023-12-25', EndDate:'2023-12-31' }

    ];

    const [users,setUsers] = useState(initialUsers);

    const deleteUser = (id) => {
        const updatedUsers = users.filter((user)=> user.id !== id);
        setUsers(updatedUsers); 
    }

    const [checkedUsers, setCheckedUsers] = useState([]);

    const checkBook = (id) =>{
        if(checkedUsers.includes(id)){
            setCheckedUsers(prevCheckedUsers => prevCheckedUsers.filter(userId=>userId !== id));
        } else {
            setCheckedUsers(prevCheckedUsers=> [...prevCheckedUsers,id])
        }
    }
    return (
        <div className="dashboard">
            <h2>Booking</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Suite</th>
                        <th>Room</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td ><p className={`status-${user.status.toLowerCase()}`}>{user.status}</p></td>
                            <td>{user.StartDate}</td>
                            <td>{user.EndDate}</td>
                            <td>
                            <FontAwesomeIcon icon={faCheck}/>
                            </td>
                            <td>
                                <button>
                                <FontAwesomeIcon icon={faCheck} />
                                </button>
                            </td>
                        </tr>
                    )
                    
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable;