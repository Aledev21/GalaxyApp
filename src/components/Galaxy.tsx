import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Rocket, Users, Brain, Timer, Star, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  type: 'solo' | 'group';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  requiredSkills: string[];
  estimatedTime: string;
  xpPoints: number;
}

const projects: Record<string, Project[]> = {
  frontend: [
    {
      id: '1',
      name: 'Responsive Portfolio',
      description: 'Create a modern portfolio website with responsive design and animations',
      type: 'solo',
      difficulty: 'beginner',
      requiredSkills: ['HTML', 'CSS', 'JavaScript'],
      estimatedTime: '1 week',
      xpPoints: 100
    },
    {
      id: '2',
      name: 'Team Dashboard',
      description: 'Build a collaborative dashboard for team productivity tracking',
      type: 'group',
      difficulty: 'intermediate',
      requiredSkills: ['React', 'TypeScript', 'Tailwind'],
      estimatedTime: '2 weeks',
      xpPoints: 250
    },
    {
      id: '3',
      name: 'E-commerce Platform',
      description: 'Develop a full-featured e-commerce platform with cart and checkout',
      type: 'group',
      difficulty: 'advanced',
      requiredSkills: ['React', 'Redux', 'Stripe', 'Firebase'],
      estimatedTime: '3 weeks',
      xpPoints: 400
    }
  ],
  backend: [
    {
      id: '4',
      name: 'REST API Service',
      description: 'Develop a RESTful API with authentication and data validation',
      type: 'solo',
      difficulty: 'intermediate',
      requiredSkills: ['Node.js', 'Express', 'MongoDB'],
      estimatedTime: '1 week',
      xpPoints: 200
    },
    {
      id: '5',
      name: 'Real-time Chat System',
      description: 'Build a scalable real-time chat system with WebSocket',
      type: 'group',
      difficulty: 'advanced',
      requiredSkills: ['Node.js', 'Socket.io', 'Redis'],
      estimatedTime: '2 weeks',
      xpPoints: 350
    },
    {
      id: '6',
      name: 'Microservices Architecture',
      description: 'Create a microservices-based system with service discovery',
      type: 'group',
      difficulty: 'advanced',
      requiredSkills: ['Node.js', 'Docker', 'Kubernetes', 'gRPC'],
      estimatedTime: '4 weeks',
      xpPoints: 500
    }
  ],
  devops: [
    {
      id: '7',
      name: 'CI/CD Pipeline',
      description: 'Set up a complete CI/CD pipeline with automated testing',
      type: 'solo',
      difficulty: 'intermediate',
      requiredSkills: ['GitHub Actions', 'Docker', 'Jest'],
      estimatedTime: '1 week',
      xpPoints: 200
    },
    {
      id: '8',
      name: 'Infrastructure as Code',
      description: 'Create infrastructure using Terraform and AWS',
      type: 'group',
      difficulty: 'advanced',
      requiredSkills: ['Terraform', 'AWS', 'Ansible'],
      estimatedTime: '2 weeks',
      xpPoints: 300
    }
  ]
};

const galaxyBackgrounds: Record<string, string> = {
  frontend: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2',
  backend: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  devops: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29'
};

const galaxyGradients: Record<string, string> = {
  frontend: 'from-purple-500 to-indigo-600',
  backend: 'from-emerald-500 to-teal-600',
  devops: 'from-orange-500 to-red-600'
};

export function Galaxy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const galaxyProjects = projects[id as keyof typeof projects] || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const handleStartProject = (project: Project) => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={galaxyBackgrounds[id as keyof typeof galaxyBackgrounds]}
          alt="Galaxy Background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${galaxyGradients[id as keyof typeof galaxyGradients]} opacity-90`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center">
          <Rocket className="h-10 w-10 mr-3" />
          {id?.charAt(0).toUpperCase() + id?.slice(1)} Galaxy
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galaxyProjects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <span className={`${getDifficultyColor(project.difficulty)} text-sm font-medium px-3 py-1 rounded-full bg-white/10`}>
                  {project.difficulty}
                </span>
              </div>
              
              <p className="text-gray-200 mb-4">{project.description}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-blue-400" />
                  <span>{project.type === 'solo' ? 'Solo Project' : 'Group Project'}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Brain className="h-4 w-4 mr-2 text-purple-400" />
                  <span>{project.requiredSkills.join(', ')}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Timer className="h-4 w-4 mr-2 text-green-400" />
                  <span>{project.estimatedTime}</span>
                </div>

                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>{project.xpPoints} XP Points</span>
                </div>
              </div>
              
              <button
                onClick={() => handleStartProject(project)}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Start Project</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}