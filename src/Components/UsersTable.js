import { useState } from "react";
const UsersTable = () =>{

    const initialUsers = [
        { id: 1, name: 'John Doe', date: '2023-12-25' },
        { id: 2, name: 'Jane Smith', date: '2023-12-26' }
    ];

    const [users,setUsers] = useState(initialUsers);

    const deleteUser = (id) => {
        const updatedUsers = users.filter((user)=> user.id !== id);
        setUsers(updatedUsers); 
    }
    return (
        <div className="users-list">
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.date}</td>
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

export default UsersTable;