import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Galaxy } from './components/Galaxy';
import { GalaxyMap } from './components/GalaxyMap';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { ProjectView } from './components/ProjectView';
import { TechLeadDashboard } from './components/TechLeadDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B1026] text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<GalaxyMap />} />
          <Route path="/galaxy/:id" element={<Galaxy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/:id" element={<ProjectView />} />
          <Route path="/tech-lead" element={<TechLeadDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}