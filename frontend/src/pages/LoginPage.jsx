import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {
  const { authUser } = useAuthStore();
  return (
        <h1 className="text-white text-xl">LoginPage</h1>
  );
}

export default LoginPage;
