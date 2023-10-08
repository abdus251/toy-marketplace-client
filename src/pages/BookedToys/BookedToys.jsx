import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookedRow from "./BookedRow/BookedRow";

const BookedToys = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deleteCount > 0) {
                        alert('deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })  
    .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        // update state
                        const remaining = bookings.filter(booking => booking._id !==id);
                        const updated = bookings.find(booking => booking._id === id);
                        updated.status = 'confirm'
                        const newBookings = [updated, ... remaining];
                        setBookings(newBookings);
                    }
                })
    }
    return (
        <div className="bg-gradient-to-r from-purple-300 to-pink-300">
            <h1 className="py-8 text-5xl">Your bookings: {bookings.length}</h1>
            <div className="overflow-x-auto text-left">
                <table className="table">
                    <tbody>
                        {
                            bookings.map(booking => <BookedRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookedRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BookedToys;