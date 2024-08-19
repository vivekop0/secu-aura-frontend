import { useState } from "react";
import axios from "axios";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    hospitalRegDate: '',
    hospitalRegNumber: '',
    emergencyWardNumber: '',
    certificateUpload: null,
    password: '',
    confirmPassword: '',
    numberOfAmbulances: '', // Ensure this is included
  });
 
  
  const [showSuccess, setShowSuccess] = useState(false); // State to manage success pop-up

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });

    try {
      const response = await axios.post("https://server-h6oh.onrender.com/api/users/register", formDataToSubmit, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log("Response data:", response.data); // Debugging line
      if(response.data) {
        setShowSuccess(true);  // Show the success pop-up
        setTimeout(() => {
          navigate('/login');  // Redirect to login after showing the pop-up
        }, 2000); // Wait for 2 seconds before redirecting
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} showSuccess={showSuccess} />
  );
};
