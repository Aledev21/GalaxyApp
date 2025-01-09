import React from 'react';
import { Link } from 'react-router-dom';

const galaxies = [
  {
    id: 'frontend',
    name: 'Frontend Galaxy',
    description: 'Master the art of user interfaces',
    image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'backend',
    name: 'Backend Galaxy',
    description: 'Explore server-side technologies',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'devops',
    name: 'DevOps Galaxy',
    description: 'Automate and optimize deployment pipelines',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29',
    color: 'from-orange-500 to-red-600'
  }
];

export function GalaxyMap() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Choose Your Galaxy</h1>
      <p className="text-gray-300 mb-8">Each galaxy contains unique projects to help you master specific skills</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galaxies.map((galaxy) => (
          <Link
            key={galaxy.id}
            to={`/galaxy/${galaxy.id}`}
            className="group relative h-96 overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0">
              <img
                src={galaxy.image}
                alt={galaxy.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${galaxy.color} opacity-75 group-hover:opacity-85 transition-opacity duration-300`} />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">{galaxy.name}</h3>
              <p className="text-lg opacity-90 transform group-hover:translate-x-2 transition-transform duration-300 delay-75">{galaxy.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}