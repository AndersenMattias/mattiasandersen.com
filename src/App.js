import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

import './styles/abstracts/_base.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/projects' exact element={<Projects />} />
        <Route path='/projects/:id' exact element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
