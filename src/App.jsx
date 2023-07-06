
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
import Services from './screens/Services';
import Team from './screens/Team';
import Contact from './screens/Contact';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      //relative path
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='classes' element={<Classes />} />
        <Route path='services' element={<Services />} />
        <Route path='team' element={<Team />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
