import { h, Component } from 'preact';
import style from './style';

export default class NotFound extends Component {
	render() {
		return (
			<div class = 'view'>
				<div class='card'></div>
				<h2 class = 'header'>404! Page not found.</h2>
				<div class='body'>
					Looks like the page you are trying to access, doesn't exist.
				</div>
			</div>
		);
	}
}
