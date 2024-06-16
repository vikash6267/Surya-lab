import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchCategory } from "../../../serivces/operations/admin";
import { createProduct } from "../../../serivces/operations/admin";
import { useSelector } from "react-redux";

function AddTest() {
  const [categories, setCategories] = useState([]);
  const { token } = useSelector((state) => state.auth);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetchCategory();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Formik form validation schema
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required").trim(),
    rate: Yup.number().required("Rate is required"),
    highPrice: Yup.number().required("High Price is required"),
    mrp: Yup.number().required("MRP is required"),
    organ: Yup.string().required("Organ is required"),
    purpose: Yup.string().required("Purpose is required"),
    sampleType: Yup.string().required("Sample Type is required"),
    method: Yup.string().required("Method is required"),
    tat: Yup.string().required("Turnaround Time is required"),
    temp: Yup.string(),
  });

  // Formik initial form values
  const initialValues = {
    title: "",
    rate: "",
    highPrice: "",
    mrp: "",
    organ: "",
    purpose: "",
    sampleType: "",
    method: "",
    tat: "",
    temp: "",
  };

  // Handle form submission
  const onSubmit = async (values) => {
    try {
      console.log(values)
      await createProduct(values, token);
      console.log("Test created successfully!");
      // formik.resetForm();
    } catch (error) {
      console.error("Error creating Test:", error);
    }
  };

  // Formik form instance
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container mx-auto">
      <div className="text-center space-y-2 font-bold">Add Test</div>
      <form onSubmit={formik.handleSubmit} className="Test">
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter Test Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="form-input mt-1 block w-full rounded-md border-blue-500 ring ring-blue-200"
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500">{formik.errors.title}</div>
          )}
        </div>

        {/* Rate */}
        <div className="mb-4">
          <label htmlFor="rate" className="block text-gray-700">
            Rate
          </label>
          <input
            id="rate"
            name="rate"
            type="number"
            placeholder="Enter Test Rate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rate}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.rate && formik.errors.rate && (
            <div className="text-red-500">{formik.errors.rate}</div>
          )}
        </div>

        {/* High Price */}
        <div className="mb-4">
          <label htmlFor="highPrice" className="block text-gray-700">
            High Price
          </label>
          <input
            id="highPrice"
            name="highPrice"
            type="number"
            placeholder="Enter Test High Price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.highPrice}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.highPrice && formik.errors.highPrice && (
            <div className="text-red-500">{formik.errors.highPrice}</div>
          )}
        </div>

        {/* MRP */}
        <div className="mb-4">
          <label htmlFor="mrp" className="block text-gray-700">
            MRP
          </label>
          <input
            id="mrp"
            name="mrp"
            type="number"
            placeholder="Enter Test MRP"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mrp}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.mrp && formik.errors.mrp && (
            <div className="text-red-500">{formik.errors.mrp}</div>
          )}
        </div>

        {/* Organ */}
        <div className="mb-4">
          <label htmlFor="organ" className="block text-gray-700">
            Organ
          </label>
          <input
            id="organ"
            name="organ"
            type="text"
            placeholder="Enter Organ"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.organ}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.organ && formik.errors.organ && (
            <div className="text-red-500">{formik.errors.organ}</div>
          )}
        </div>

        {/* Purpose */}
        <div className="mb-4">
          <label htmlFor="purpose" className="block text-gray-700">
            Purpose
          </label>
          <input
            id="purpose"
            name="purpose"
            type="text"
            placeholder="Enter Purpose"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.purpose}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.purpose && formik.errors.purpose && (
            <div className="text-red-500">{formik.errors.purpose}</div>
          )}
        </div>

        {/* Sample Type */}
        <div className="mb-4">
          <label htmlFor="sampleType" className="block text-gray-700">
            Sample Type
          </label>
          <input
            id="sampleType"
            name="sampleType"
            type="text"
            placeholder="Enter Sample Type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sampleType}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.sampleType && formik.errors.sampleType && (
            <div className="text-red-500">{formik.errors.sampleType}</div>
          )}
        </div>

        {/* Method */}
        <div className="mb-4">
          <label htmlFor="method" className="block text-gray-700">
            Method
          </label>
          <input
            id="method"
            name="method"
            type="text"
            placeholder="Enter Method"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.method}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.method && formik.errors.method && (
            <div className="text-red-500">{formik.errors.method}</div>
          )}
        </div>

        {/* Turnaround Time */}
        <div className="mb-4">
          <label htmlFor="tat" className="block text-gray-700">
            Turnaround Time
          </label>
          <input
            id="tat"
            name="tat"
            type="text"
            placeholder="Enter Turnaround Time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tat}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.tat && formik.errors.tat && (
            <div className="text-red-500">{formik.errors.tat}</div>
          )}
        </div>

        {/* Temp */}
        <div className="mb-4">
          <label htmlFor="temp" className="block text-gray-700">
            Temp
          </label>
          <input
            id="temp"
            name="temp"
            type="text"
            placeholder="Enter Temp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.temp}
            className="form-input mt-1 block min-w-full"
          />
          {formik.touched.temp && formik.errors.temp && (
            <div className="text-red-500">{formik.errors.temp}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTest;
