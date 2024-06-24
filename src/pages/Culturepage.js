import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/FooterPg'
import CultureSection from '../components/Culture'
import DiscoverTradition from '../components/Tradition'
import ProverbSection from '../components/Proverb'
import MythAndLegendSection from '../components/Myth'

export const Culturepage = () => {
  return (
    <div>
        <Navbar/>
        <CultureSection/>
        <DiscoverTradition/>
        <ProverbSection/>
        <MythAndLegendSection/>
        <FooterPage/>
    </div>
  )
}
