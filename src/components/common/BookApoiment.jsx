import { IoClose } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiUserFill } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import { useState } from 'react';

const AppointmentModal = ({ isOpen, closeModal }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call, validation)
    console.log('Form submitted:', { name, mobileNumber, location });
    // Optionally, close the modal after submission
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
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4 flex items-center">
            <RiUserFill className="text-gray-400 mr-2" />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              placeholder="Area "
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-2 bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center"
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
