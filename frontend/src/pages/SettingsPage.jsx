import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Settingspage = () => {
  const { authUser } = useAuthStore();
  return (
        <h1 className="text-white text-xl">Settingspage</h1>
  );
}

export default Settingspage;
