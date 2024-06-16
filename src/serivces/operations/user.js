import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../redux/slices/authSlice"
import { setUser } from "../../redux/slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { userEndpoints } from "../apis"
const {
   LOGIN_API,
  FETCH_PROFILE,

} = userEndpoints







export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      // console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      dispatch(setUser(response.data.user))
      localStorage.setItem("user", JSON.stringify(response.data.user))

      localStorage.setItem("token", JSON.stringify(response.data.token))
      // navigate("/profile")
   
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
     localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

export function fetchMyProfile(token,navigate) {

  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", FETCH_PROFILE, null, {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      })

      console.log("APP JS RESPONSE............", response)

      if (!response.data.success) {
        if (response.status === 401) {
          dispatch(logout(navigate)); // Dispatch the logout action
          toast.error("Session expired. Please login again.");
          return;
        }
        throw new Error(response.data.message)
      }
      // console.log(response.data)

      dispatch(setUser(response.data.user))



      localStorage.setItem("user", JSON.stringify(response.data.user))

    } catch (error) {
      // console.log("LOGIN API ERROR............", error)
    }
    dispatch(setLoading(false))
  }
}