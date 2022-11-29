import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ eachProduct, setEachProduct }) => {
    const { name, OriginalPrice, ResellPrice } = eachProduct;
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            phone,
            location
        }
       
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged){
                setEachProduct(null);
                toast.success('Booking confirmed successfully')
            }
        })    
    }
    
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="text" value={OriginalPrice} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input type="text" value={ResellPrice} className="input input-bordered w-full" />
                        </div>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                        <input className='btn w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;