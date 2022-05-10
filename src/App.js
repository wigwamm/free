import history from "./history";
import { Router, Switch, Route } from "react-router";

import store from './store/store'
import { Provider } from 'react-redux'

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Index from "./components/1.0";
import Free2 from "./components/2.0";

let persistor = persistStore(store);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path="/v1" component={Index} />
              <Route exact path="/" component={Free2} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}