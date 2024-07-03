import React, { useEffect } from "react";
import { displayMoney,calculateDiscount } from "../../../helper/utills";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AppointmentModal from "../../common/BookApoiment";
import { useState } from "react";
function TestSlide({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const[test,setTest] = useState("")

  useEffect(() => {
    AOS.init({ duraction: 100000,  });
  }, []);

  // const displayedProducts =  products.slice(0, 5);
  const displayedProducts = [...products].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  ).slice(0, 5);

  return (
    <div
      className="w-full overflow-x-auto  mt-6 "
      style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
      }}
    >
        <div className={`grid lg:grid-cols-4 lg:px-6 gap-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 `} >
                    {displayedProducts.map((product) => (
                      <div
                        key={product?._id}
                        className=" mx-2 mb-6 flex flex-col rounded-lg shadow-lg bg-white overflow-hidden transition p-2 duration-300 transform border-black border-[1px]"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="lg:p-4 md:p-4 p-1">
                          <p className="font-montserrat lg:text-lg text-sm font-bold mb-2 lg:min-h-[52px]">
                            {product?.title}
                          </p>
                          <div className="min-h-[50px]">
                            <div className="flex justify-between">
                              <p className="font-montserrat lg:text-base text-[12px] text-gray-900 font-bold">
                                {displayMoney(product?.mrp)}
                              </p>
                              {
                                product.highPrice &&
                              <del className="font-montserrat text-sm text-gray-600">
                                {displayMoney(product.highPrice)}
                              </del>
                              }
                            </div>
                           {
                            product?.highPrice &&  <p className="text-[#0A7201] ">
                            You Save {displayMoney(product?.highPrice - product?.mrp)}
                            </p>
                           }
                          </div>
                          <div className="flex">
                           {  product?.highPrice && <p className="font-montserrat text-base text-green-600 font-bold bg-green-200 p-2 rounded-xl mt-4">
                              {calculateDiscount(product?.highPrice, product?.mrp)}% OFF
                            </p>}
                          </div>
                        </div>
                        <div className="flex justify-center items-center lg:h-24 lg:text-base text-[12px]">
                          <button
                                                    onClick={() => {setIsOpen(true) ; setTest(product?.title)}}

                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold lg:py-2 lg:px-4 p-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                          >
                            Book Appointment
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
{
  isOpen && 
  <AppointmentModal
  test={test}
        isOpen={isOpen}
        closeModal={()=>setIsOpen(false)}
       
      />
}
      
    </div>
  );
}

export default TestSlide;
