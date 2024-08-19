import { useEffect, useState } from "react";
import HospitalTable from "./HospitalTavle";
import Navbar from "./Navbar"
import axios from "axios";
import human from '../Images/human.png'
export const Dashboard = () => {
    // const dummyHospitals = [
    //     {
    //       id: 1,
    //       dateTime: '2024-08-01 10:30 AM',
    //       name: 'City Hospital',
    //       email: 'info@cityhospital.com',
    //       address: '123 Main St, Springfield',
    //       phone: '555-1234',
    //       city: 'Springfield',
    //       state: 'IL',
    //       pincode: '62704',
    //       registrationDate: '2024-01-15',
    //       registrationNumber: 'REG-001',
    //       registrationPhoto: 'https://via.placeholder.com/150',
    //       emergencyWardNumber: '5',
    //       numberOfAmbulances: 10,
    //       status: 'active',
    //     },
    //     {
    //       id: 2,
    //       dateTime: '2024-08-02 11:00 AM',
    //       name: 'General Hospital',
    //       email: 'contact@generalhospital.com',
    //       address: '456 Elm St, Metropolis',
    //       phone: '555-5678',
    //       city: 'Metropolis',
    //       state: 'NY',
    //       pincode: '10001',
    //       registrationDate: '2023-12-20',
    //       registrationNumber: 'REG-002',
    //       registrationPhoto: 'https://via.placeholder.com/150',
    //       emergencyWardNumber: '3',
    //       numberOfAmbulances: 15,
    //       status: 'inactive',
    //     },
    //     {
    //       id: 3,
    //       dateTime: '2024-08-03 09:45 AM',
    //       name: 'Community Hospital',
    //       email: 'support@communityhospital.com',
    //       address: '789 Oak St, Gotham',
    //       phone: '555-8765',
    //       city: 'Gotham',
    //       state: 'NJ',
    //       pincode: '07001',
    //       registrationDate: '2024-02-10',
    //       registrationNumber: 'REG-003',
    //       registrationPhoto: 'https://via.placeholder.com/150',
    //       emergencyWardNumber: '7',
    //       numberOfAmbulances: 8,
    //       status: 'active',
    //     },
    //     {
    //       id: 4,
    //       dateTime: '2024-08-04 01:15 PM',
    //       name: 'Downtown Hospital',
    //       email: 'info@downtownhospital.com',
    //       address: '321 Pine St, Star City',
    //       phone: '555-4321',
    //       city: 'Star City',
    //       state: 'CA',
    //       pincode: '90001',
    //       registrationDate: '2024-03-25',
    //       registrationNumber: 'REG-004',
    //       registrationPhoto: 'https://via.placeholder.com/150',
    //       emergencyWardNumber: '4',
    //       numberOfAmbulances: 12,
    //       status: 'inactive',
    //     },
    //     {
    //       id: 5,
    //       dateTime: '2024-08-05 02:30 PM',
    //       name: 'Uptown Hospital',
    //       email: 'uptown@hospital.com',
    //       address: '654 Maple St, Central City',
    //       phone: '555-9876',
    //       city: 'Central City',
    //       state: 'CO',
    //       pincode: '80202',
    //       registrationDate: '2024-04-15',
    //       registrationNumber: 'REG-005',
    //       registrationPhoto: 'https://via.placeholder.com/150',
    //       emergencyWardNumber: '6',
    //       numberOfAmbulances: 9,
    //       status: 'active',
    //     },
    //     {
    //       id: 6,
    //       dateTime: '2024-08-06 03:45 PM',
    //       name: 'Metro Hospital',
    //       email: 'contact@metrohospital.com',
    //       address: '987 Cedar St, Keystone City',
    //       phone: '555-6543',
    //       city: 'Keystone City',
    //       state: 'PA',
    //       pincode: '15104',
    //       registrationDate: '2024-05-20',
    //       registrationNumber: 'REG-006',
    //       registrationPhoto: 'https://via.placeholder.com/150',
    //       emergencyWardNumber: '8',
    //       numberOfAmbulances: 11,
    //       status: 'inactive',
    //     },
    //   ];
      
    const [data, setData] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('https://server-h6oh.onrender.com/api/users/data',{withCredentials:true }); // Replace with your API endpoint
                setData(response.data); 
                console.log(response.data)// Set the data in state
            } catch (err) {
                console.log(err)// Set the error message in state
            }
        };

        // Call the fetch function
        fetchData();
    }, []);
      
  return (
    <div>
        <Navbar/>
       <div>
        <div className="">
        <div className="flex justify-end px-20">
            <img src={human} className="w-20"/>
        </div>
<HospitalTable hospitals={data}/>
        </div>
       </div>
    </div>
  )
}
