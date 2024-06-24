import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/FooterPg'
import HistorySection from '../components/History'
import RulersSection from '../components/King'
import EthnicitiesSection from '../components/Ethiny'

export const Historypage = () => {
  return (
    <>
        <Navbar/>
        <HistorySection/>
        <RulersSection/>
        <EthnicitiesSection/>
        <FooterPage/> 
    </>
  )
}
