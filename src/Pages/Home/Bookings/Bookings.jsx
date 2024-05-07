import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import  bookingBanner  from "../../../assets/images/banner/4.jpg";

const Bookings = () => {
  const user = useContext(AuthContext);

  // console.log(user.email)
  // console.log(user.user.email)

  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:3100/bookings?email=${user?.user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  //   console.log(bookings);

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
        {bookings.map((b) => (
          <tr key={b._id}>
            <td>
              <button className="bg-black rounded-full p-4 text-white">
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
              <button className="px-4 py-2 text-white font-semibold bg-orange-600 rounded-lg">
                Pending
              </button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Bookings;
