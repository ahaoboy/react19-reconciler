import React from "react";
import CustomRenderer from "./render";

const Text = (props) => {
	return <p className={props.className}>{props.content}</p>;
};

class App extends React.Component {
	state = {
		text: new Date().toString(),
	};
	onButtonClick = () => {
		this.setState(() => ({ text: new Date().toString() }));
	};
	render() {
		return (
			<div>
				<Text className="hello-class" content={this.state.text} />
				<span style="color:blue;" autofocus>
					world
				</span>
				<button onClick={this.onButtonClick}>Get current time</button>
			</div>
		);
	}
}

CustomRenderer.render(<App />, document.getElementById("root"));
