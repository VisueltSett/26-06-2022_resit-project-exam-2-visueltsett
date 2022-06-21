//import GameStore from "./pages/GameStore";
import Navigation from "./components/navigation/Navigation.jsx";
import Checkout from "./pages/Checkout";
import Landingpage from "./pages/Landingpage.jsx";

function App() {
	return (
		<>
			<Landingpage />
			<Navigation />
			<Checkout />
		</>
	);
}

export default App;
