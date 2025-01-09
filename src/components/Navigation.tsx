import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, User, Heart, Users } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-[#1A1F35] border-b border-[#2A2F45]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold">DevGalaxy</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="flex items-center space-x-1 hover:text-purple-400">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <div className="flex items-center space-x-1 text-red-400">
              <Heart className="h-5 w-5" />
              <span>3</span>
            </div>
            <Link to="/team" className="flex items-center space-x-1 hover:text-purple-400">
              <Users className="h-5 w-5" />
              <span>Team</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}