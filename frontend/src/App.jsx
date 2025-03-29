import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';  // Import Navigate for redirection
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage.jsx';
import { useAuthStore } from './store/useAuthStore'; // Correctly import the named export
import { Loader } from 'lucide-react';  // Assuming Loader is from lucide-react
import { Toaster } from 'react-hot-toast'; // Fixed import statement

function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  
  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();  // Check auth status on component mount
  }, [checkAuth]);

  console.log({ authUser });

  // Loader screen if checking authentication
  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-10 h-10 animate-spin" />  {/* Size adjustment for the loader */}
      </div>
    );
  }

  return (
    <div /* data-theme={theme} */> {/* Uncomment this if you're using theme store */}
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
      
      <Toaster /> {/* Render the Toaster component */}
    </div>
  );
}

export default App;
