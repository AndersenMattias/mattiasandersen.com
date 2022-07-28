import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';

import { Experience, Home, ProjectDetails, Projects } from './Pages';

import './styles/abstracts/_base.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
