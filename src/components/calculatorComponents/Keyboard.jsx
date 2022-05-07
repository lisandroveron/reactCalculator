import React from "react";

class Keyboard extends React.Component{
	render(){
		return (
			<div id="keyboard" className="keyboard">
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
		);
	};
};

export default Keyboard;