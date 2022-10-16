import { Routes, Route } from 'react-router-dom'
import Generate from "./screens/generate/Generate";
import Check from "./screens/check/Check";
import Navbar from "./components/nav/Navbar";

const App = props => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/check' element={<Check />} />
				<Route path='/generate' element={<Generate />} />
				<Route path='/' exact element={<Generate />} />
			</Routes>
		</>
	)
}

export default App;
