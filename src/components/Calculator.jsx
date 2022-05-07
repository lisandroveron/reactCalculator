import React from "react";
// Components
import Screen from "./calculatorComponents/Screen.jsx";
import Keyboard from "./calculatorComponents/Keyboard.jsx";

class Calculator extends React.Component{
	render(){
		return (
			<div id="calculator" className="calculator">
				<Screen />
				<Keyboard />
			</div>
		);
	};
};

export default Calculator;