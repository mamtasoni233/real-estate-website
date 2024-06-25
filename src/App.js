import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Features from './Components/Feature';
import Sales from './Components/Onsale';
import About from './Components/About';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Page404 from './Components/Page404';
let AllRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about-us',
    element: <About />,
  },
  {
    path: 'features',
    element: <Features />,
  },
  {
    path: 'sales',
    element: <Sales />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={AllRoutes} />
      <Footer />
    </div>
  );
}

export default App;
