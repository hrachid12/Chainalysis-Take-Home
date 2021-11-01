import { Route, Switch } from 'react-router-dom';

import Bitcoin from './pages/Bitcoin';
import Ethereum from './pages/Ethereum';
import MainBody from './components/UI/MainBody';
import MainHeader from './components/UI/MainHeader';
import Home from './pages/Home';

function App() {
  return (
    <MainBody>
      <MainHeader />

      <main>
        <Switch>
			<Route path="/" exact>
				<Home />
			</Route>

			<Route path="/bitcoin" exact>
				<Bitcoin />
			</Route>

			<Route path="/ethereum" exact>
				<Ethereum />
			</Route>

		</Switch>

      </main>
    </MainBody>
  );
}

export default App;
