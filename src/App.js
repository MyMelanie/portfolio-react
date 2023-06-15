import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
	return (
		<div>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/skills' element={<Skills/>} />
				<Route path='/work' element={<Work/>} />
				<Route path='/contact' element={<Contact/>} />
			</Routes>
{/* 			<Home/>
			<About/>
			<Skills/>
			<Work/>
			<Contact/> */}
		</div>
	);
}

export default App;
