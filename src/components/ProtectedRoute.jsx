
import Cookies from 'js-cookie';

// Function to check if the user is authenticated
 export const isAuthenticated = () => {
  return Cookies.get('token') !== undefined; // Replace 'authToken' with your actual cookie name
};


export const deleteCookie =()=>{
  Cookies.remove("token")
}

