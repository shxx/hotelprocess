
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { Router, hashHistory, browserHistory, match } from 'react-router'
import routes from './router'
import configureStore from './stores';


//创建 Redux 的 store 对象
const store = configureStore();

render(
	<Provider store={store}>
	  	<Router history={browserHistory}>
	  		{routes}
	  	</Router>
  	</Provider>,
	document.getElementById('app')
);