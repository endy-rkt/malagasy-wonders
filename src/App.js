import Discover from "./components/Discover";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FooterPage from "./components/FooterPg";

function App() {
  return (
    <div className="App">
		<Navbar/>
		<Hero/>
		<Discover/>
		<Explore/>
		<FooterPage/>
    </div>
  );
}

export default App;



