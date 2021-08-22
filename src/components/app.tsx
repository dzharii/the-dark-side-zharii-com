import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import FanArtPage from '../routes/fanart';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import Background from './background';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Header />
            <Background />
            <div style={{ position: 'absolute' }}>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/fanart/" component={FanArtPage} user="me" />
                    <Route path="/fanart/:user" component={FanArtPage} />
                    <NotFoundPage default />
                </Router>
            </div>
        </div>
    );
};

export default App;
