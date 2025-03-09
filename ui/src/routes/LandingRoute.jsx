import { lazy } from 'react';

// project imports
import Loadable from '../components/Loadable';

// login option 3 routing
const Landing = Loadable(lazy(() => import('../views/Landing')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LandingRoute = {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/',
        element: <Landing />
      }
    ]
  };

export default LandingRoute;