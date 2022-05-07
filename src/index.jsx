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

/*
<header>
		<h1>Calculator</h1>
	</header>
	<main>
		<div id="calculator" className="calculator" />
			<div className="screen" />
				<input type="text" id="resultLine" className="resultLine" value="Hello world" />
				<input type="text" id="writeLine" className="writeLine" value="" />
				<input type="button" id="buttonC" className="button buttonC" value="C" />
				<input type="button" id="buttonErase" className="button buttonErase" value="<" />
			</div>
			<div id="keyboard" className="keyboard" />
				<input type="button" id="button1" className="button" value="1" />
				<input type="button" id="button2" className="button" value="2" />
				<input type="button" id="button3" className="button" value="3" />
				<input type="button" id="buttonPlus" className="button" value="+" />
				<input type="button" id="button4" className="button" value="4" />
				<input type="button" id="button5" className="button" value="5" />
				<input type="button" id="button6" className="button" value="6" />
				<input type="button" id="buttonMinus" className="button" value="-" />
				<input type="button" id="button7" className="button" value="7" />
				<input type="button" id="button8" className="button" value="8" />
				<input type="button" id="button9" className="button" value="9" />
				<input type="button" id="buttonMultiplication" className="button" value="*" />
				<input type="button" id="buttonDot" className="button" value="." />
				<input type="button" id="button0" className="button" value="0" />
				<input type="button" id="buttonEqual" className="button" value="=" />
				<input type="button" id="buttonDivision" className="button" value="/" />
			</div>
		</div>
	</main>
*/