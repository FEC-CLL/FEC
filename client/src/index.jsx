import React from 'react';
// import reactDOM from 'react-dom';
// (does the same thing as the line below, but doesn't access the function)
import { createRoot } from 'react-dom/client';

import App from './components/App';

// ReactDOM.createRoot(document.getElementById)('root')).render(<App />);
// Above is for the first way on line 2
createRoot(document.getElementById('root')).render(<App />); // for the method on line 4