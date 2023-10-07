import { Link } from "react-router-dom";


const AllToysCard = ({ service }) => {
    const { ToyName, Subcategory, Price,
        AvailableQuantity, Seller, Rating, ImageUrl, _id } = service;
    return (
        <div className="card bg-base-300 border border-sky-200 mb-8 mt-8 w-full">
            <figure className="px-10 pt-10">
                <img src={ImageUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ToyName}</h2>
                <p> <span className="text-orange-600 font-bold">Rating:</span> {Rating} <br />{Subcategory}  <br /> 
                <p></p>Price: $ {Price} <br /> Stock: {AvailableQuantity} <br />Seller: {Seller} {_id}</p>
                <div className="card-actions">
                    <Link to={`/addToy/${_id}`}>
                        <button className="btn btn-primary">Book Now</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default AllToysCard;