import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteProduct } from "../../../serivces/operations/admin";

function AllProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.product);
  const { token } = useSelector((state) => state.auth);
  const [products, setProducts] = useState(allProduct || []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct({ id }, token);
      setProducts(products.filter((prod) => prod._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    console.log(allProduct);
  }, [allProduct]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Tests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded p-4 flex flex-col border-rose-900 border-2">
          
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg  mb-2 text-red-600 font-bold">{product.title}</h3>
              <p className="text-sm text-gray-900 mb-2 font-semibold">Organ: {product.organ}</p>
              <p className="text-sm text-gray-900 mb-2 font-semibold">Sample Type: {product.sampleType}</p>
              <p className="text-sm text-gray-900 mb-2 font-semibold">Temperature: {product.temp}</p>
              <p className="text-sm text-gray-900 mb-2 font-semibold">Turnaround Time (TAT): {product.tat}</p>
              <p className="text-sm text-gray-900 mb-2 font-semibold">Purpose: {product.purpose}</p>
              <div className="flex justify-between items-center mt-2 gap-2">
                <p className="text-lg font-bold">MRP: {product.mrp}</p>
                <p className="text-lg font-bold">Rate: {product.rate}</p>
                {product.highPrice && (
                  <p className="text-sm text-red-600">High Price: {product.highPrice}</p>
                )}
              </div>
            </div>
           <div>
           <button
              className="self-end mt-4 text-red-600 hover:text-red-800"
              onClick={() => handleDelete(product._id)}
            >
              <FaTrash className="inline-block mr-1" />
              Delete
            </button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
