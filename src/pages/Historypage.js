import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/FooterPg'
import HistorySection from '../components/History'
import RulersSection from '../components/King'
import EthnicitiesSection from '../components/Ethiny'
import { MapDetails } from '../components/Maps/MapDetails'

export const Historypage = () => {
  return (
    <>
        <Navbar/>
        <MapDetails/>
        <HistorySection/>
        <RulersSection/>
        <EthnicitiesSection/>
        <FooterPage/> 
    </>
  )
}
