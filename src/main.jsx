import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from "./Components/AppLayout/AppLayout.jsx"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Deposit from './Components/Deposit/Deposit.jsx'
import Withdraw from './Components/Withdraw/Withdraw.jsx'
import CheckBalance from './Components/CheckBalance/CheckBalance.jsx';
import { Provider } from 'react-redux';
import { store } from './Components/store/Reducer/store.js';

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/deposit',
        element : <Deposit />
      },
      {
        path : '/balance',
        element : <CheckBalance />
      },
      {
        path : '/withdraw',
        element : <Withdraw />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
