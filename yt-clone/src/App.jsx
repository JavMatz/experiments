import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideMenu from "./components/sidemenu/sideMenu.jsx";
import NavBar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import BandRegistration from './pages/BandRegistration.jsx';
import VoterRegistration from './pages/VoterRegistration.jsx';

function App() {
	return (
		<BrowserRouter>
			<div class="flex">
				<SideMenu />
				<div class="grow-[7] shrink basis-0">
					<NavBar />
					<Routes>
						<Route path="/voterregistration" element={<VoterRegistration />} />
						<Route path="/bandregistration" element={<BandRegistration />} />
						<Route path="/video" element={<Video />} />
						<Route path="/home" element={<Home />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
