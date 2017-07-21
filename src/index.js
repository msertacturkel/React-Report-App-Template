import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import 'flexboxgrid/dist/flexboxgrid.css';
import '@blueprintjs/core/dist/blueprint.css';
import '@blueprintjs/table/dist/table.css';
import 'chart.js/dist/Chart';
import {Provider} from 'react-redux';
import store from "./store";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
