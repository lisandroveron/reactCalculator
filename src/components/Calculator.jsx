import React from "react";
// Components
import Screen from "./calculatorComponents/Screen.jsx";
import Keyboard from "./calculatorComponents/Keyboard.jsx";

class Calculator extends React.Component{
	componentDidMount(){
		// Declarations to track the elements of the html
		const calculator = document.getElementById("calculator");
		const keyboard = document.getElementById("keyboard");
		let writeLine = document.getElementById("writeLine");
		let resultLine = document.getElementById("resultLine");
		writeLine.value = "";

		let result;
		// Listener to the calculator keyboard
		calculator.addEventListener("click", (e)=>{
				// Below are the buttons functions for write numbers and signs
			if(e.target.type == "button" && e.target.value != undefined && writeLine.textLength <= 21 && e.target.value != "=" && e.target.value != "C" && e.target.value != "<"){
				writeLine.value += e.target.value;
				// Below are the (equal and erase) buttons functions
			} else if(e.target.value == "="){
				result = eval(writeLine.value);
				resultLine.value = result;
			} else if(e.target.value == "C"){
				resultLine.value = "";
				writeLine.value = "";
			} else if(e.target.value == "<"){
				writeLine.value = writeLine.value.slice(0, -1);
			};
		});
			}
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