
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signupage } from './pages/signupage';
import { Loginpage } from './pages/loginpage';
import { DashboardPage } from './pages/dashboard';
import  { isAuthenticated } from './components/ProtectedRoute'; // Import the ProtectedRoute component

export const App = () => {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Signupage/>} />
          <Route path="/login"  element={<Loginpage/>} />
      
          <Route
            path="/dashboard"
              element={isAuthenticated?<DashboardPage/>:<Loginpage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
