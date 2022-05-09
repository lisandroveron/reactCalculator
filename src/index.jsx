import React from "react";
import ReactDOM from "react-dom";
// Components
import Calculator from "./components/Calculator.jsx";
// CSS files
import "./css/grid.css";
import "./css/main.css";
import "./css/normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const app = <>
	<header>
		<h1>Calculator</h1>
	</header>
	<main>
		<Calculator />
	</main>
</>;

root.render(app);