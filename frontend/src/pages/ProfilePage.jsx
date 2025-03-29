import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

const ProfilePage = () => {
    const { authUser } = useAuthStore();
  return (
        <h1 className="text-white text-xl">Profilepage</h1>
  );
}

export default ProfilePage;
