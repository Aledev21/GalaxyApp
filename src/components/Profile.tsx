import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Star, Heart } from 'lucide-react';

export function Profile() {
  const skillData = [
    { skill: 'React', current: 7, target: 9, average: 6 },
    { skill: 'TypeScript', current: 6, target: 8, average: 7 },
    // Add more skills
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="bg-[#1A1F35] rounded-lg p-6">
          <div className="text-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-purple-400">Frontend Developer</p>
          </div>
          
          <div className="flex justify-around text-center">
            <div>
              <Heart className="h-6 w-6 text-red-400 mx-auto mb-2" />
              <p className="font-bold">3</p>
              <p className="text-sm text-gray-400">Lives</p>
            </div>
            <div>
              <Trophy className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <p className="font-bold">12</p>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div>
              <Star className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="font-bold">85%</p>
              <p className="text-sm text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Skills Chart */}
        <div className="lg:col-span-2 bg-[#1A1F35] rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Skills Progress</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={skillData}>
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="current" stroke="#8b5cf6" />
                <Line type="monotone" dataKey="target" stroke="#60a5fa" />
                <Line type="monotone" dataKey="average" stroke="#34d399" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}