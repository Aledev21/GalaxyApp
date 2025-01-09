import React, { useState } from 'react';
import { Users, Brain, Target, BarChart2, Plus, Edit, Trash2 } from 'lucide-react';

interface ProjectStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  failedProjects: number;
}

interface DeveloperStats {
  name: string;
  role: string;
  completedProjects: number;
  averageRating: number;
  targetRole: string;
  lives: number;
}

export function TechLeadDashboard() {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [projectStats] = useState<ProjectStats>({
    totalProjects: 24,
    activeProjects: 12,
    completedProjects: 8,
    failedProjects: 4,
  });

  const [developers] = useState<DeveloperStats[]>([
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      completedProjects: 5,
      averageRating: 4.2,
      targetRole: 'Senior Frontend Developer',
      lives: 3,
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      completedProjects: 7,
      averageRating: 4.5,
      targetRole: 'Tech Lead',
      lives: 2,
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#1A1F35] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Projects</h3>
            <BarChart2 className="h-6 w-6 text-purple-400" />
          </div>
          <p className="text-3xl font-bold">{projectStats.totalProjects}</p>
        </div>
        <div className="bg-[#1A1F35] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active</h3>
            <Users className="h-6 w-6 text-blue-400" />
          </div>
          <p className="text-3xl font-bold">{projectStats.activeProjects}</p>
        </div>
        <div className="bg-[#1A1F35] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Completed</h3>
            <Target className="h-6 w-6 text-green-400" />
          </div>
          <p className="text-3xl font-bold">{projectStats.completedProjects}</p>
        </div>
        <div className="bg-[#1A1F35] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Failed</h3>
            <Brain className="h-6 w-6 text-red-400" />
          </div>
          <p className="text-3xl font-bold">{projectStats.failedProjects}</p>
        </div>
      </div>

      {/* Project Management */}
      <div className="bg-[#1A1F35] rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Project Management</h2>
          <button
            onClick={() => setShowNewProjectForm(true)}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>New Project</span>
          </button>
        </div>

        {showNewProjectForm && (
          <form className="bg-[#252B45] rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Project Name</label>
                <input
                  type="text"
                  className="w-full bg-[#1A1F35] border border-[#3A3F55] rounded-lg px-4 py-2"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Galaxy</label>
                <select className="w-full bg-[#1A1F35] border border-[#3A3F55] rounded-lg px-4 py-2">
                  <option value="frontend">Frontend Galaxy</option>
                  <option value="backend">Backend Galaxy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select className="w-full bg-[#1A1F35] border border-[#3A3F55] rounded-lg px-4 py-2">
                  <option value="solo">Solo Project</option>
                  <option value="group">Group Project</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Difficulty</label>
                <select className="w-full bg-[#1A1F35] border border-[#3A3F55] rounded-lg px-4 py-2">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  className="w-full bg-[#1A1F35] border border-[#3A3F55] rounded-lg px-4 py-2 h-32"
                  placeholder="Enter project description"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Required Skills</label>
                <input
                  type="text"
                  className="w-full bg-[#1A1F35] border border-[#3A3F55] rounded-lg px-4 py-2"
                  placeholder="Enter skills separated by commas"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => setShowNewProjectForm(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create Project
              </button>
            </div>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-[#2A2F45]">
                <th className="pb-4">Project Name</th>
                <th className="pb-4">Galaxy</th>
                <th className="pb-4">Type</th>
                <th className="pb-4">Difficulty</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2F45]">
              <tr className="text-gray-300">
                <td className="py-4">Responsive Portfolio</td>
                <td>Frontend</td>
                <td>Solo</td>
                <td>Beginner</td>
                <td>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>
                <td>
                  <div className="flex space-x-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Developer Progress */}
      <div className="bg-[#1A1F35] rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Developer Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {developers.map((dev) => (
            <div key={dev.name} className="bg-[#252B45] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{dev.name}</h3>
                  <p className="text-gray-400">{dev.role}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">♥</span>
                  <span>{dev.lives}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Completed Projects</span>
                  <span>{dev.completedProjects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Rating</span>
                  <span>{dev.averageRating}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Target Role</span>
                  <span>{dev.targetRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}