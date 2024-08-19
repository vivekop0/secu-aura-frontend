import PropTypes from 'prop-types';
 'react';
// import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { WebCam } from './WebCam';
import Images from "../Images/imageBg.png";
import Logo from "../Images/logo.svg";
import safe from '../Images/safe.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    hospitalName: "",
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://server-h6oh.onrender.com/api/users/login", formData, {
        withCredentials: true,
      });

      if (response.data) {
        setSuccess(true); // Set success to true on successful login
        console.log("Login successful:", response.data);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // if (success) {
  //   return <Navigate to="/dashboard" replace />;
  // }

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      success={success}
    />
  );
};

export const Form = ({ handleChange, handleSubmit, formData, success }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left section */}
      <div className="bg-black text-white flex flex-col justify-between h-1/3 p-8 lg:p-16 relative">
  <img
    src={Images}
    alt="Background"
    className="absolute inset-0 w-[
541px] h-full object-cover z-0"
  />
  <div className="relative z-10 flex flex-col justify-end h-full">
       <div className="flex flex-col text-center">
        <img src={safe} className="w-[
220px]"/>
<div className="mt-0 relative top-[-50px] text-xl">
<p className="text-2xl">Feel <span className="text-green-400">Safe</span> Everywhere</p>
<p className="text-base mt-2">#Safe-T-Fast</p> 
</div>

       </div>
   
  
  </div>
</div>

      {/* Right section */}
      <div className="lg:w-1/2 bg-white flex flex-col justify-center items-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-10">
            <img src={Logo} alt="Hospital Logo" className="h-12" />
            <div className="flex space-x-4">
              <Link to="/" className="font-semibold text-gray-800 hover:underline">
                Sign Up
              </Link>
              <span className="text-gray-600">/</span>
              <Link to="/login" className="font-semibold text-gray-800 hover:underline">
                Login
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Welcome to Sicu-aura</h2>
            <div className="space-y-4">
              {success ? (
                <WebCam />
              ) : (
                <>
                  <div>
                    <input
                      type="text"
                      name="hospitalName"
                      placeholder="Hospital Name"
                      value={formData.hospitalName}
                      onChange={handleChange}
                      className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none h-12 mb-2"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none h-12 mb-2"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none h-12 mb-2"
                      required
                    />
                  </div>
                </>
              )}
            </div>
            {!success && (
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="py-2 px-8 bg-black text-white rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  Login
                </button>
              </div>
            )}
          </form>
          <p className="mt-4 text-sm text-center text-gray-500">
            * Terms and Conditions privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    hospitalName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  success: PropTypes.bool.isRequired,
};

export default Login;
