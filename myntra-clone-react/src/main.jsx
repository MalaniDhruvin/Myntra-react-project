import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App.jsx'
import Bag from './components/Bag.jsx';
import Home from './Home.jsx';
import store from './store/index.js';
import "bootstrap/dist/css/bootstrap.min.css"  // Import bootstrap css

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [{
      path: '/bag',
      element: <Bag />,
    },
    {
      path: '/',
      element: <Home />,
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
