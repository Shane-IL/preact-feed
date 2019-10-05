import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class = 'view'>
				<h1>Preact Feed App</h1>
				<div class='card'>
					<h2 class = 'header'>Welcome to my feed app</h2>
					<div class='body'>
						Click the connect button to connect to the server and start the app
					</div>
					<div class='card-actions'>
						<div class='card-action-button'>Connect</div>
					</div>
				</div>
				
			</div>
		);
	}
}
