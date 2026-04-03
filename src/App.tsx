import "./App.css";

import InputSearch from "./components/InputSearch";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Match from "./components/Match";

function App() {
	return (
		<>
			<NavBar />
			<Banner />
			<InputSearch />
			<Match />
			<Footer />
		</>
	);
}

export default App;
