


import { useState } from 'react';
import './App.css';

import robloxIcon from './assets/Roblox.png';
import logo512 from './assets/logo512.png';
import logo192 from './assets/logo192.png';

function App() {

  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      image: logo512,
      title: 'Modelling and solving Sokoban',
      desc: '3rd year dissertation project to model and solve the 2D puzzle game Sokoban using the DIDP framework for python.',
      details: 'More information about Project 1 goes here.'
    },
    {
      image: logo192,
      title: 'Classification of flower species',
      desc: 'Designed and implemented a Convolutional Neural Network to classify 102 flower species from the Flowers-102 dataset, using the PyTorch deep learning library within python.',
      details: 'Optimised model performance through systematic hyper-parameter tuning, improving test accuracy from a random guess to 54.3%.'
    },
  ];

  return (
    <div className="App">
      <nav className="App-nav">
        <a href="#about">About</a>
        <a href="#Experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <header className="App-header">
        <section id="about">
          <h1>Robbie Toombs</h1>
          <p>Welcome to my portfolio website!</p>
        </section>
        <section id="Experience">
          <h2>Experience</h2>
          <div className="experience-entry">
            <img className="experience-img" src={robloxIcon} alt="Roblox Logo" />
            <div className="experience-details">
              <div className="experience-title">Roblox game developer</div>
              <ul className="experience-points">
                <li>Independently created Slinky Slink Studios, releasing 3 games, gaining experience in full-stack game development,
user interface design, data handling, 3D asset creation using Blender/Roblox Studio and programming in Lua</li>
                <li>Collaboratively developed 4 successful titles for the groups 50/50 Games and Ben’s Games alongside another
developer, gaining team working experience through regular meetings, pair-programming and peer reviewing code</li>
                <li>Maintained each project by identifying and resolving bugs and performance issues, while releasing updates with
new content and improvements based on player feedback</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul className="project-list">
            {projects.map((proj, idx) => {
              const isSelected = selectedProject && selectedProject.title === proj.title;
              return (
                <li
                  key={proj.title}
                  className={`project-item${isSelected ? ' selected' : ''}`}
                  onClick={() => setSelectedProject(proj)}
                  tabIndex={0}
                  onKeyPress={e => { if (e.key === 'Enter') setSelectedProject(proj); }}
                >
                  <img className="project-img" src={proj.image} alt={proj.title + ' logo'} />
                  <span className="project-title">{proj.title}</span>
                  <span className="project-desc">{proj.desc}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div>
            <p>Email: <a href="mailto:toombr100@gmail.com">toombr100@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/RobbieTmbs" target="_blank" rel="noopener noreferrer">RobbieTmbs</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/robert-toombs-8b3a9635a" target="_blank" rel="noopener noreferrer">Robbie Toombs</a></p>
          </div>
        </section>
      </header>
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            <h3>{selectedProject.icon} {selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
