import React from 'react';

require('./App.css');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			time: new Date(),
		};

		this.timer = null;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1000);
	}

	componentWillUnmount() {
		this.timer = clearInterval(this.timer);
	}

	render() {
		return (
			<div>
				<h1>Hello World</h1>

				<p>The time is <b>{this.state.time.toString()}</b></p>
			</div>
		);
	}
}

export default App;
