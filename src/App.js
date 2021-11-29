import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './containers/Home.js'
import Challenges from './containers/Challenges.js'
import Arena from './containers/Arena.js'

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home/>}/>
			<Route exact path="/challenges" element={<Challenges/>}/>
			<Route exact path="/arena" element={<Arena/>}/>
		</Routes>
	)
}

export default App
