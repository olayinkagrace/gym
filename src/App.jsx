
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
import Classes from './screens/Classes';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      //relative path
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='classes' element={<Classes />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
