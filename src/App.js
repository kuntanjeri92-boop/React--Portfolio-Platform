import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Nairobi Roasters E-Commerce',
    category: 'Web Design',
    description: 'Responsive storefront and subscription flow for specialty coffee.',
  },
  {
    id: 2,
    title: 'Savanna Health Identity',
    category: 'Branding',
    description: 'Visual identity, typography system, and clinic wayfinding guidelines.',
  },
  {
    id: 3,
    title: 'TransitPulse Companion',
    category: 'Mobile App',
    description: 'Prototype interface for real-time commuter route updates.',
  },
];

function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="controls-row">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <ProjectForm onAddProject={handleAddProject} />
        </div>
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}

export default App;