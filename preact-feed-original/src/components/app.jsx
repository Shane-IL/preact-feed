import { h, render, Component } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import { Router } from 'preact-router';

import Header from './header'
import Home from './home';

const NotFound = lazy(() => import('./404'));

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
    handleRoute = e => {
        this.setState({
            currentUrl: e.url
        });
    };

    render() {
        return (
            <div id="app">
                <Header selectedRoute={this.state.currentUrl} />
                <Suspense fallback={<div>loading...</div>}>
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                        <NotFound default />
                    </Router>
                </Suspense>
            </div>
        );
    }
}

render(<App />, document.body);