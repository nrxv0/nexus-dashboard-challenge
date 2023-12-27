import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";
import "../styles/table.css";
const BookingTable = () =>{

    const initialUsers = [
        { id: 1, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31', Room: 20 },
        { id: 2, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31', Room: 35 },
        { id: 3, name: 'John Doe',status:'Done', StartDate: '2023-12-25', EndDate:'2023-12-31', Room: 11 },
        { id: 4, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31', Room: 2 },
        { id: 5, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31', Room: 25 },
        { id: 6, name: 'John Doe',status:'pending', StartDate: '2023-12-25', EndDate:'2023-12-31', Room: 40 },
        { id: 7, name: 'John Doe',status:'Cancel', StartDate: '2023-12-25', EndDate:'2023-12-31', Room: 12 }

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
        <div className="booking-list">
            <h2>Booking</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Room</th>
                        <th>Check</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td ><p className={`status-${user.status.toLowerCase()}`}>{user.status}</p></td>
                            <td>{user.StartDate}</td>
                            <td>{user.EndDate}</td>
                            <td>{user.Room}</td>
                            <td>
                                <button onClick={()=> checkBook(user.id)} className={checkedUsers.includes(user.id) ? 'checked' : ''}>
                                <FontAwesomeIcon icon={faCheck} />
                                </button>
                            </td>
                            <td>
                                <button onClick={()=>deleteUser(user.id)}>
                                    <span>X</span>
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

export default BookingTable;