import { IoClose } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiUserFill } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { apiConnector } from '../../serivces/apiConnector';


const AppointmentModal = ({ isOpen, closeModal }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    // setLoading(true);
    const toastID = toast.loading("Sending Appointment Request");

    try {
      const response = await axios.post('http://localhost:4000/book', {
        name,
        mobileNumber,
        location,
        area
      });

      if (response.data.success) {
        toast.success("Appointment request sent successfully!");
        // Reset the form
        setName('');
        setMobileNumber('');
        setLocation('');
        setArea('');
      } else {
        toast.update(toastID, { render: "Something went wrong...", type: "error", isLoading: false, autoClose: 5000 });
      }
    } catch (error) {
      console.error('Error submitting appointment request:', error);
      toast.error("Something went wrong...");
    } finally {
      // setLoading(false);
     toast.dismiss(toastID)

    }
    closeModal();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Book Appointment</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
  <div className="mb-4 flex items-center">
    <RiUserFill className="text-gray-400 mr-2" />
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Full Name"
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
      required
    />
  </div>
  <div className="mb-4 flex items-center">
    <MdPhone className="text-gray-400 mr-2" />
    <input
      type="tel"
      id="mobileNumber"
      value={mobileNumber}
      onChange={(e) => setMobileNumber(e.target.value)}
      placeholder="Mobile Number"
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
      required
    />
  </div>
  <div className="mb-4 flex items-center">
    <HiOutlineLocationMarker className="text-gray-400 mr-2" />
    <input
      type="text"
      id="area"
      value={area}
      onChange={(e) => setArea(e.target.value)}
      placeholder="Area"
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
      required
    />
  </div>
  <div className="mb-4 flex items-center">
    <HiOutlineLocationMarker className="text-gray-400 mr-2" />
    <input
      type="text"
      id="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Full Location"
      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
      required
    />
  </div>
  <div className="mt-6 flex justify-end">
    <button
      type="button"
      onClick={closeModal}
      className="mr-2 bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center hover:bg-gray-400"
    >
      <IoClose className="mr-1" />
      Cancel
    </button>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
    >
      <FaCheck className="mr-1" />
      Submit
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default AppointmentModal;
