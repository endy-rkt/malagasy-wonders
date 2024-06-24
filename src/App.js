import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Quizzpage } from "./pages/Quizzpage";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <Routes>
		<Route path="/" element={<Homepage/>}></Route>
		<Route path="/quizz" element={<Quizzpage/>}></Route>
		<Route path="*" element={<Page404/>}></Route>
	</Routes>
  );
}

export default App;



