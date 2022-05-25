import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='d796be72-9949-40c6-8c81-58114da34f76' language='en-US'>
    <Provider>
      <App />
    </Provider>
    </SpeechProvider>,

 document.getElementById('root')
 );
