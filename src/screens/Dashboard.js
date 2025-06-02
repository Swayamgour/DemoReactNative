// src/screens/Dashboard.js
import React from 'react';
import { StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import SwiperImage from '../components/SwiperImage';
import CardOfEvent from '../components/CardOfEvent';
import Footer from '../components/Footer';
import AppTabs from './AppTabs';

function Dashboard() {
  return (
    <>
      <Navbar />
      <SwiperImage />
      <CardOfEvent />
     
    </>
  );
}

export default Dashboard;
