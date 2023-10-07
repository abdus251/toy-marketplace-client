import { useLoaderData } from 'react-router-dom';
import pic from'../../assets/banner/kid-with-colorful-alphabets_53876-165173.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const AddToy = () => {
    const service = useLoaderData();
    const {ToyName, _id, Price, Rating, ImageUrl} = service;
    const {user} = useContext(AuthContext);

    const orderConfirm = event =>{
        event.preventDefault();
        const form = event.target;
        const PictureUrl = form.PictureUrl.value;
        const  name = form.name.value;
        const sellerName = form.sellerName.value;
        const email = user?.email;
        const booking = {
            customerName: name, 
            email,
            service: _id,
            ImageUrl, 
            Price,
            Rating
            
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Order Confirm successfully')
            }
        })

    }

    return (
        <div className="">
            <img style={{height:'400px'}} src={pic} className='w-full' />
            <div className="hero bg-base-200">
                <div className="hero-content">
                    <div className="text-center ">
                    <h2 className='text-5xl font-bold text-purple-600'>{ToyName }</h2>
                        <h1 className="text-4xl font-bold text-orange-600 my-8">Please fill up the form!</h1>
                    <form onSubmit={orderConfirm} className="card w-full max-w shadow-2xl bg-base-100 content-center ml-2">
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Picture URL of the toy</span>
                                </label>
                                <input type="text" name='PictureUrl' placeholder="URL of the toy" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name="sellerName" placeholder="seller name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user.email} placeholder="seller email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input type="text" name="subCategory" placeholder="sub-category" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price: $</span>
                                </label>
                                <input type="text" name="sub-category" placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="rating" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" placeholder="available quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <input type="text" placeholder="detail description" className="input input-bordered" />
                            </div>  
                        </div>
                        <div className="form-control mb-4 mx-4 ">
                                <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                            </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddToy;