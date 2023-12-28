import { useState } from "react";
import "../styles/table.css";
const RoomsTable = () =>{

    const initialRooms = [
        { id: 1, Room: 'Room 1', bed: 'Single bed', persons: '1 person', availability: 'Available' },
        { id: 2, Room: 'Room 2', bed: 'Double bed', persons: '2 persons', availability: 'Available' },
        { id: 3, Room: 'Room 3', bed: 'Single bed', persons: '1 person', availability: 'Not available' },
        { id: 4, Room: 'Room 4', bed: 'Double bed', persons: '2 persons', availability: 'Available' },
        { id: 5, Room: 'Room 5', bed: 'Single + Double', persons: '3 persons', availability: 'Available' },
        { id: 6, Room: 'Room 6', bed: 'Single bed', persons: '1 person', availability: 'Available' },
        { id: 7, Room: 'Room 7', bed: 'Double bed', persons: '2 persons', availability: 'Not available' },
        { id: 8, Room: 'Room 8', bed: 'Single + Double', persons: '3 persons', availability: 'Available' },
        { id: 9, Room: 'Room 9', bed: 'Double bed', persons: '2 persons', availability: 'Available' },
        { id: 10, Room: 'Room 10', bed: 'Single bed', persons: '4 persons', availability: 'Not available' }
    ];
    
    

    // const [rooms,setRooms] = useState(initialRooms);

    
    return (
        <div className="rooms-list">
            <h2>Rooms list</h2>
            <table>
                <thead>
                    <tr>
                        <th>Room</th>
                        <th>Bed Type</th>
                        <th>N° Persons</th>
                        <th>Availability</th>
                        <th>Booking</th>
                    </tr>
                </thead>
                <tbody>
                    {initialRooms.map((room)=>(
                        <tr key={room.id}>
                            <td>{room.Room}</td>
                            <td>{room.bed}</td>
                            <td>{room.persons}</td>
                            <td>{room.availability}</td>
                            <td className="booking-button">
                                <button>Booking</button>
                            </td>
                        </tr>
                    )
                    
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default RoomsTable;