import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { displayMoney, calculateDiscount } from "../helper/utills";
import { useParams } from "react-router-dom";
import Footer from '../components/common/Footer';
import AOS from "aos";
import 'aos/dist/aos.css';
import AppointmentModal from '../components/common/BookApoiment';
export const sizes = ["S", "M", "L", "XL", "XXL"];
export const genders = ["Male", "Female", "Unisex"];

function AllProduct({ products }) {
  const { query } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { allProduct } = useSelector(state => state.product);

  useEffect(() => {
    console.log(allProduct);
  }, [allProduct]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = allProduct.filter(product => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      product.title.toLowerCase().includes(searchTermLower) ||
      product?.organ?.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <>
      <div className="min-h-screen mt-[60px] min-w-[100vw] mx-auto mb-[100px]">
        <h2 className='text-center font-bold text-2xl'>All Tests</h2>
        <div className='min-h-full'>
          <div className="flex justify-center my-4 items-center gap-2 w-11/12 mx-auto">
           <label htmlFor=""  className=' font-bold lg:text-xl text-[10px]'>Search Test</label>
            <input
              type="text"
              placeholder="Search by Test Name or Organ..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border p-2 rounded-lg ring "
            />
          </div>
          <div className="flex">
            <div className="w-full bg-white p-4 min-h-screen">
              {
                filteredProducts.length === 0 ? (
                  <div className='flex items-center h-[70vh] justify-center font-bold'>
                    No Tests are found
                  </div>
                ) : (
                 
            <div className={`grid lg:grid-cols-4 lg:px-6 gap-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 `} >
                    {filteredProducts.map((product) => (
                      <div
                        key={product._id}
                        className=" mx-2 mb-6 flex flex-col rounded-lg shadow-lg bg-white overflow-hidden transition p-2 duration-300 transform border-black border-[1px]"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="lg:p-4 md:p-4 p-1">
                          <p className="font-montserrat lg:text-lg text-sm font-bold mb-2 lg:min-h-[52px]">
                            {product.title}
                          </p>
                          <div className="min-h-[50px]">
                            <div className="flex justify-between">
                              <p className="font-montserrat lg:text-base text-[12px] text-gray-900 font-bold">
                                {displayMoney(product.mrp)}
                              </p>
                              {
                                product.highPrice &&
                              <del className="font-montserrat text-sm text-gray-600">
                                {displayMoney(product.highPrice)}
                              </del>
                              }
                            </div>

                            {
                              product.highPrice &&
                            <p className="text-[#0A7201] ">
                              You Save {displayMoney(product.highPrice - product.mrp)}
                            </p>
                            }
                          </div>
                          <div className="flex">
                           { product.highPrice &&
                            <p className="font-montserrat text-base text-green-600 font-bold bg-green-200 p-2 rounded-xl mt-4">
                              {calculateDiscount(product.highPrice, product.mrp)}% OFF
                            </p>
                           }
                          </div>
                        </div>
                        <div className="flex justify-center items-center lg:h-24 lg:text-base text-[12px]">
                          <button
                            onClick={() => setIsOpen(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold lg:py-2 lg:px-4 p-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                          >
                            Book Appointment
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              }
            </div>
          </div>
        </div>
        {
  isOpen && 
  <AppointmentModal
        isOpen={isOpen}
        closeModal={()=>setIsOpen(false)}
       
      />
}
      </div>
      <Footer />
    </>
  );
}

export default AllProduct;
