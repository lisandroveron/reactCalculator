import React from "react";

class Screen extends React.Component{
	render(){
		return (
			<div className="screen">
				<input type="text" id="resultLine" className="resultLine" value="Hello world" />
				<input type="text" id="writeLine" className="writeLine" value="" />
				<input type="button" id="buttonC" className="button buttonC" value="C" />
				<input type="button" id="buttonErase" className="button buttonErase" value="<" />
			</div>
		);
	};
};

export default Screen;