
import { useNavigate } from 'react-router-dom'; 

import Cookies from 'js-cookie';
import logo from '../Images/safe.png';
import avtar from '../Images/2594f285820486376a1a39bb46ce87a2.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
       Cookies.remove('token')
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="flex flex-row justify-between px-20 py-3 bg-nav">
            <div>
                <img src={logo} className='h-11 w-20' alt="Logo" />
            </div>

            <div className="flex flex-row space-x-3">
                <img src={avtar} className='h-10 w-11 rounded-full' alt="Avatar" />

                <button
                    onClick={handleLogout}
                    className='text-white bg-gray-700 rounded-lg px-6'
                >
                    Log out
                </button>
            </div>
        </div>
    );
};

export default Navbar;
