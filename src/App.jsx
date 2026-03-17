import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Studies from './pages/Studies';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import About from './pages/About';

import './styles/styles.css';
import './styles/skills.css';
import './styles/studies.css';
import './styles/hobbies.css';
import './styles/language-selector.css';
import './styles/experiences.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="studies" element={<Studies />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;