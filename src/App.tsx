import { useState } from "react";
import compatibility from "./utils/compatibility";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Match from "./components/Match";
import "./App.css";
import Personnage from "./page/Personnage";

function App() {
	const [showPersonnagePage, setShowPersonnagePage] = useState(false);

	if (showPersonnagePage) {
		return <Personnage onBack={() => setShowPersonnagePage(false)} />;
	}

	return (
		<>
		<main className="app-page">
			<NavBar />
			<Banner />
			<Match />
			<div className="app-nav-wrapper">
				<button
					className="app-nav-button"
					onClick={() => setShowPersonnagePage(true)}
				>
					Voir la page personnages
				</button>
			</div>
			<Footer />
			</main>
		</>
	);
}

export default App;
