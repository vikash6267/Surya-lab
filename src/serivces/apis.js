// const BASE_URL = "http://localhost:4000/api/v1"

const BASE_URL = "https://surya-lab-e2d1.onrender.com/api/v1"

// ??USER APIS
export const userEndpoints = {
    LOGIN_API : BASE_URL + "/user/login",
     CONTACT_US_API: BASE_URL + "/user/contact",
     FETCH_PROFILE : BASE_URL + "/user/fetchMyProfile",

}


// PRODUCT APIS
export const productEndpoints = {
    GET_ALL_PRODUCT_API: BASE_URL + "/product/all-product",
     GET_PRODUCT_DETAILS : BASE_URL + "/product/getProductDetails",

     
  }





  




  // ADMIN APIS 

  export const adminEndPoints = {
    ADD_PRODUCT_API : BASE_URL + "/product/create",
    EDIT_PRODUCT_API : BASE_URL + "/product/edit",
    DELETE_PRODUCT_API : BASE_URL + "/product/delete",



    //Category
    ADD_CATEGORY_API : BASE_URL + "/product/createCategory",
    EDIT_CATEGORY_API : BASE_URL + "/product/editCategory",
    DELTE_CATEGORY_API : BASE_URL + "/product/deleteCategory",
    GET_ALL_CATEGORY_API : BASE_URL + "/product/showAllCategories",


    IMAGE_UPLOAD : BASE_URL + "/image/multi",



   
  }