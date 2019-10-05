import {h, Fragment} from 'preact';
import { useRef, useState } from 'preact/hooks';
import { route } from 'preact-router';
import style from './style';

const Header = props => {
	const _this = this;

	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const drawer = useRef(null);

	const closeDrawer = () => setDrawerOpen(false);
	const openDrawer = () => setDrawerOpen(true);

	const linkTo = path => {
		route(path);
		closeDrawer();
	};

	const goHome = () => linkTo('/');
	const goFeed = () => linkTo('/feed')

	return (
		<>
			<div class='top-bar'>
				<div class='left-content'>
					<div menu class='menu-toggle material-icons' onClick={openDrawer}>menu</div>
					<div class='title'>Preact Feed</div>
				</div>
				<div class='right-content'></div>
			</div>
			{
				isDrawerOpen ?
					(<div modal class='drawer' ref={drawer}>
						<div class='content'>
							<div class='item' selected={props.selectedRoute === '/'} onClick={goHome}>
								<div class='icon material-icons'>home</div>
								Home
							</div>
							<div class='item' selected={props.selectedRoute === '/Feed'} onClick={goFeed}>
								<div class='icon material-icons'>rss_feed</div>
								Feed
							</div>
						</div>
						<div class='overlay' onClick={closeDrawer}></div>
					</div>)
					: null
			}
		</>
	)
}

export default Header;