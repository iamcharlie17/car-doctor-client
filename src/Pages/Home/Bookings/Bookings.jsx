import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import  bookingBanner  from "../../../assets/images/banner/4.jpg";
import axios from "axios";

const Bookings = () => {
  const user = useContext(AuthContext);

  // console.log(user.email)
  // console.log(user.user.email)

  const [bookings, setBookings] = useState([]);
    const [control, setControl] = useState(false);

  const url = `http://localhost:3100/bookings?email=${user?.user?.email}`;
  useEffect(() => {

    axios.get(url, {withCredentials: true})
    .then(res => setBookings(res.data))

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url, control]);

    // console.log(bookings);

  const handleDelete = id =>{
    const procced = confirm('Are you sure?')
    if (procced){
        fetch(`http://localhost:3100/bookings/${id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.deletedCount>0 ){
                alert('Your booking deleted')
                setControl(!control)
            }
        })
    }
  }

  const handleStatus = id =>{
    fetch(`http://localhost:3100/bookings/${id}`, {
        method: "PUT",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({status: 'Confirm'})
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.updatedCount>0){
           
            const remaining = bookings.filter(booking => booking._id !== id)
            const updated = bookings.filter(booking => booking._id === id)
            updated.status = "Confirm"
            const newBookings = [updated, ...remaining]
            setBookings(newBookings)
            setControl(!control)
        }
    })
  }

  return (
    <div>
      {/* bookings banner */}
      <div className="relative ">
        <img
          src={bookingBanner}
          className="h-[50vh] w-full rounded-lg -z-10 "
          alt=""
        />
        <div className="bg-gradient-to-br from-black to-transparent h-[50vh] w-full rounded-lg absolute bottom-0 z-10">
          <div className=" top-[20vh] left-20 absolute ">
            <h1 className="font-semibold text-white text-4xl">Car Details</h1>
            <h1 className="text-red-500">Home - Product Details</h1>
          </div>
          
          
        </div>
      </div>
      <table className="table my-16">
        {
         bookings.length? <>
         {
            bookings.map((b) => (
        
                <tr key={b._id}>
                  <td>
                    <button onClick={()=>handleDelete(b._id)} className="bg-black rounded-full p-4 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <div className="flex items-center gap-6">
                      <div className="avatar">
                        <div className="mask rounded-lg w-24 h-24">
                          {b.image && (
                            <img src={b.image} alt="Avatar Tailwind CSS Component" />
                          )}
                        </div>
                      </div>
                      <div>
                        <h1 className="font-bold text-2xl">{b.service}</h1>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1 className="font-semibold text-xl">${b.price}</h1>
                  </td>
                  <td>{b.date}</td>
                  <th>
                    {
                        b.status === 'Confirm'? <span className="py-2 px-4 border-2 border-green-400 bg-white text-green-400 rounded-lg">Aproved</span>  :
                        <button onClick={()=> handleStatus(b._id)} className="px-4 py-2 text-white font-semibold bg-orange-600 rounded-lg">
                      Pending
                    </button>
                    }
                  </th>
                </tr>
              ))
         }
         </>:
         <h1 className="text-3xl text-red-500 font-semibold text-center">Bookings Empty</h1>
        }
      </table>
    </div>
  );
};

export default Bookings;
