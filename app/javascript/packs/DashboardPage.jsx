import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './dashboard.css';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export default function DashboardPage() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="container">
      <div className="logout-button">
        <Button onClick={handleLogout} variant="outlined" startIcon={<LogoutIcon/>} >
          Logout
        </Button>
      </div>
    </div>
  )
}