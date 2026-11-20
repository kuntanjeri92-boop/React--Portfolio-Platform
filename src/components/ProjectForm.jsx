import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Design');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      category,
      description: description.trim(),
    };

    onAddProject(newProject);
    setTitle('');
    setCategory('Web Design');
    setDescription('');
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <div className="form-group">
        <label htmlFor="project-title">Project Title</label>
        <input
          id="project-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Brand Refresh for Kora Cafe"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="project-category">Category</label>
        <select
          id="project-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Web Design">Web Design</option>
          <option value="Branding">Branding</option>
          <option value="Mobile App">Mobile App</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the client goal and deliverable..."
          required
        />
      </div>

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;