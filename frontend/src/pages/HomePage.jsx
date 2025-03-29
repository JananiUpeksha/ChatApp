import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Homepage = () => {
   const { authUser } = useAuthStore();
  return (
        <h1 className="text-white text-xl">Homepage</h1>
  );
}

export default Homepage;
