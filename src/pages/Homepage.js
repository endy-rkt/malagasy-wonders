import React from 'react'
import Discover from "../components/Discover";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPg";

export const Homepage = () => {
  return (
	<main>
		<Navbar/>
		<Hero/>
		<Discover/>
		<Explore/>
		<FooterPage/>
	</main>
  )
}
