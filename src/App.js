import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Quizzpage } from "./pages/Quizzpage";
import { Page404 } from "./pages/Page404";
import { Culturepage } from "./pages/Culturepage";
import { Historypage } from "./pages/Historypage";

function App() {
  return (
    <Routes>
		<Route path="/" element={<Homepage/>}></Route>
		<Route path="/quizz" element={<Quizzpage/>}></Route>
		<Route path="/culture" element={<Culturepage/>}></Route>
		<Route path="/history" element={<Historypage/>}></Route>
		<Route path="*" element={<Page404/>}></Route>
	</Routes>
  );
}

export default App;



