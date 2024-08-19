/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch} from "react-icons/fa";

const HospitalTable = ({ hospitals }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState([
    {  status: 'active' },
    
    
    // other hospital entries
  ]);
  const hospitalsPerPage = 5;

  // Filter hospitals based on search term
  const filteredHospitals = hospitals.filter((hospital) => {
    const name = hospital.hospitalName || ""; // Use correct property
    const city = hospital.city || "";
    const state = hospital.state || "";

    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = filteredHospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  const totalPages = Math.ceil(filteredHospitals.length / hospitalsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  // Handle status change
  const handleStatusChange = (index, newStatus) => {
    setStatus((prevHospitals) => {
      // Create a new array with the updated status for the specific hospital
      const updatedHospitals = prevHospitals.map((hospital, i) =>
        i === index ? { ...hospital, status: newStatus } : hospital
      );
      return updatedHospitals;
    });
  };
  
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Hospital List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to the first page when searching
            }}
            className="px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg mb-4">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <tr>
              <th className="px-4 py-2 border-b">NO.</th>
              <th className="px-4 py-2 border-b">Date Time</th>
              <th className="px-4 py-2 border-b">Hospital Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Address</th>
              <th className="px-4 py-2 border-b">Phone No</th>
              <th className="px-4 py-2 border-b">City</th>
              <th className="px-4 py-2 border-b">State</th>
              <th className="px-4 py-2 border-b">Pincode</th>
              <th className="px-4 py-2 border-b">Registration Date</th>
              <th className="px-4 py-2 border-b">Registration Number</th>
              <th className="px-4 py-2 border-b">Registration Photo</th>
              <th className="px-4 py-2 border-b">Emergency Ward No</th>
              <th className="px-4 py-2 border-b">Number of Ambulances</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentHospitals.length > 0 ? (
              currentHospitals.map((hospital, index) => (
                <tr
                  key={hospital._id}
                  className={`hover:bg-indigo-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 border-b text-center">
                    {indexOfFirstHospital + index + 1}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {hospital.hospitalRegDate}
                  </td>
                  <td className="px-4 py-2 border-b font-medium text-gray-800">
                    {hospital.hospitalName}
                  </td>
                  <td className="px-4 py-2 border-b text-gray-600">
                    {hospital.email}
                  </td>
                  <td className="px-4 py-2 border-b">{hospital.address}</td>
                  <td className="px-4 py-2 border-b">{hospital.phoneNumber}</td>
                  <td className="px-4 py-2 border-b">{hospital.city}</td>
                  <td className="px-4 py-2 border-b">{hospital.state}</td>
                  <td className="px-4 py-2 border-b">{hospital.pincode}</td>
                  <td className="px-4 py-2 border-b text-center">
                    {hospital.hospitalRegDate}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {hospital.hospitalRegNumber}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {hospital.certificateUpload && (
                      <img
                        src={`http://localhost:5000/uploads/${hospital.certificateUpload}`}
                        alt="Certificate"
                        style={{ width: "100px", height: "auto" }}
                      />
                    )}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {hospital.emergencyWardNumber}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {hospital.numberOfAmbulances}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                  {status.map((hospital, index) => (
        <div key={index} className="mb-2">
          <span>{hospital.name}</span>
          <select
            value={hospital.status}
            onChange={(e) => handleStatusChange(index, e.target.value)}
            className={`px-2 py-1 rounded-full text-sm font-semibold ${
              hospital.status === 'active'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="15"
                  className="px-4 py-2 text-center text-gray-500"
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <nav>
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className="cursor-pointer">
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 border rounded ${
                    currentPage === index + 1
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-indigo-500 border-indigo-500"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HospitalTable;
