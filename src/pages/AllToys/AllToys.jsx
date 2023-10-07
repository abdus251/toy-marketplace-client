import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";


const AllToys = () => {
    const [services, setServices] = useState ([])

    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <>
        <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto mt-8 items-end" />
    </div>

        <div className="grid grid-cols-3 gap-4">
           {
            services.map( services => <AllToysCard
            key={services._id}
            service={services}
            ></AllToysCard>)
           }
        </div>
        </>
    );
};

export default AllToys;