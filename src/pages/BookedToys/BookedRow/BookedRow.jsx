
const BookedRow = ({booking, handleDelete,     handleBookingConfirm}) => {
  const { _id,ToyName, Subcategory, Price, AvailableQuantity, ViewDetailsButton, img, customerName, status} = booking;



return (
        <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th> */}
                <label>
                 
                </label>
              {/* </th> */}
              <th>Toy Image</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>$ Price</th>
              <th>Available Quantity</th>
              <th>
                {
                  status === 'confirm'? <span className="font-bold text-primary text-xl">Confirmed</span> : 
                  <button onClick={() => handleBookingConfirm(_id)} className="btn btn-xs">Please Confirm</button>}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              {/* <th> */}
              <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-gray-600 text-slate-50">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
              {/* </th> */}
              <td>
                  <div className="avatar">
                    <div className="rounded w-24 h-24">
                      <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
              </td>
              <td>
                  {customerName}            
                  </td>
              <td>{ToyName}</td>
              <td>{Subcategory}</td>
              <td>${Price}</td>
              <td>{AvailableQuantity}</td>
              <td>{ViewDetailsButton}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default BookedRow;