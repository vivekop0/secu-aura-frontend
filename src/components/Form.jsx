import PropTypes from "prop-types";
import Images from "../Images/imageBg.png"; // Replace with the actual image path
import Logo from "../Images/logo.svg"; // Replace with the actual logo path
import safe from '../Images/safe.png'
import { Link } from "react-router-dom";
import check from '../Images/check.png'
// eslint-disable-next-line react/prop-types
export const Form = ({ handleChange, handleSubmit, formData,showSuccess }) => {
  return (
    <div className="flex flex-col lg:flex-row">
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
      <div className="bg-white flex flex-col lg:w-1/2 p-8 lg:p-16">
        <div className="flex items-center mb-8">
          <img src={Logo} alt="Hospital Logo" className="h-12 mr-8" />
          <div className="flex justify-center space-x-2 ml-auto">
            <Link to="/signup" className="font-bold text-xl text-gray-800">
              Sign Up
            </Link>
            <span className="text-2xl text-gray-600">/</span>
            <Link to="/login" className="font-bold text-xl text-gray-800">
              Login
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="hospitalName"
              placeholder="Hospital Name"
              value={formData.hospitalName}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="hospitalRegNumber"
              placeholder="Hospital Registration Number"
              value={formData.hospitalRegNumber}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="emergencyWardNumber"
              placeholder="Emergency-Ward Number"
              value={formData.emergencyWardNumber}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <div>
              <label className="text-gray-700 block">
                <span className="block mb-2">
                  Registration Certificate Upload:
                </span>
                <input
                  type="file"
                  name="certificateUpload"
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="block cursor-pointer text-white hover:text-blue-700 rounded-md bg-gray-600 w-fit py-1 px-3">
                  Choose File
                </span>
              </label>
            </div>
            <input
              type="date"
              name="hospitalRegDate"
              placeholder="Hospital Registration Date"
              value={formData.hospitalRegDate}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="numberOfAmbulances"
              placeholder="Number of Ambulances"
              value={formData.numberOfAmbulances || ""}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="flex w-full justify-center mt-6">
            <button
              type="submit"
              className="py-2 px-10 bg-black text-white rounded-xl hover:bg-gray-400"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500 ">
          * Terms and Condition privacy policy
        </p>
        {showSuccess && (
          <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex items-center justify-center mb-4">
        <span className="text-green-500 text-3xl"><img src={check} className='h-10'/></span>
      </div>
      <p className="text-lg font-bold">Your Registration has been Successful</p>
    </div>
  </div>
      )}
        
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
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    pincode: PropTypes.string.isRequired,
    hospitalRegDate: PropTypes.string.isRequired,
    hospitalRegNumber: PropTypes.string.isRequired,
    emergencyWardNumber: PropTypes.string.isRequired,
    certificateUpload: PropTypes.instanceOf(File),
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    numberOfAmbulances: PropTypes.string,
  }).isRequired,
};
