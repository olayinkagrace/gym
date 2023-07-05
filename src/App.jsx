
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './screens/Home'
import About from './About'
import Layout from './components/Layout';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      //relative path
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
