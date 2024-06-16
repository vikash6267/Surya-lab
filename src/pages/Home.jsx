import { useEffect, useState } from "react";
import desktopImage from "../assests/hero/desktop.jpg";
import mobileImage from "../assests/hero/Mob.jpg";
import TestSlide from "../components/core/home/Slider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../components/common/Footer";
import banner from "../assests/hero/homeban.jpg"
import FAQ from "../components/common/FAQ";
import { FaMapMarkerAlt } from 'react-icons/fa';
function Home() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProduct] = useState([]);
  const [products2, setProduct2] = useState([]);
  const { allProduct } = useSelector((state) => state.product);
  let selectedProducts

  

  const selectRandomProducts = (products) => {
    if (!Array.isArray(products)) {
      console.error("Products is not an array");
      return [];
    }

    // Create a shallow copy of the products array
    const productsCopy = products.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = productsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [productsCopy[i], productsCopy[j]] = [productsCopy[j], productsCopy[i]];
    }

    // Select the first four products from the shuffled array
    return productsCopy.slice(0, 4);
  };



  useEffect(() => {
    // fetchSubLinks();
    setProduct(allProduct );
    selectedProducts = selectRandomProducts(products);
    console.log(selectedProducts)
    setProduct2(selectedProducts)
  }, [allProduct]);

 

  return (
  <>
      <div className=" mt-[60px]">
      {/* Hero Image */}
      <div>
        <div className=" flex w-full justify-center">
          <img src={desktopImage} alt="" className="mobile" />
          <img
            src={mobileImage}
            alt=""
            className="lg:hidden sm:hidden md:hidden "
          />
        </div>



        <div>


        <div className=" flex justify-center  w-11/12 mx-auto mt-[10px] gap-5 ">

          <p className=" p-2 bg-blue-100 border-2 border-black font-semibold rounded-lg"> Popular Test </p>
          <Link to="/allTest" className=" p-2 bg-blue-500 border-2 border-black font-semibold rounded-lg"> Search Test </Link>

       

        </div>
        {products && <TestSlide products={products} />}

        </div>
      </div>



        <div className=" flex w-full justify-center mt-[20px]" >
          <img src={banner} alt="" className=" rounded-xl" />
        </div>



        <div className="my-12 flex justify-center">
      <Link 
        to="/contact" 
        className="flex items-center text-lg font-bold text-blue-500 transition duration-300 ease-in-out transform hover:text-blue-700 hover:scale-105"
      >
        <FaMapMarkerAlt className="mr-2" />
        Know Our Branches In Bhopal
      </Link>
    </div>
      <FAQ />


      
    </div>
    <Footer />
  </>
  );
}

export default Home;
