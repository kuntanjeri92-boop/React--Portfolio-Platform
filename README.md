# Creative Agency Portfolio SPA

A responsive React single-page portfolio application built for a creative agency to showcase projects, add new projects dynamically, and filter work in real time.

## Features
- Displays initial portfolio projects in a responsive grid layout
- Dynamically adds new projects via a controlled form (`ProjectForm`)
- Dynamically filters projects by title, category, or description via a search bar (`SearchBar`)

## Component Structure
- `App.js`: Manages `projects` and `searchQuery` state, filtering logic, and prop passing
- `components/Header.jsx`: Agency title and tagline
- `components/SearchBar.jsx`: Live search input
- `components/ProjectForm.jsx`: Form to add new projects
- `components/ProjectList.jsx`: Renders filtered project cards or an empty-search state
- `components/ProjectCard.jsx`: Displays an individual project card

## Getting Started
1. Install dependencies:
   ```bash
   npm install