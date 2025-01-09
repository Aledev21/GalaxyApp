import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Brain, Clock, Users, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

interface Feedback {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
  skillRatings: { skill: string; rating: number }[];
}

const mockProject = {
  id: '1',
  name: 'Responsive Portfolio',
  description: 'Create a modern portfolio website with responsive design and animations',
  type: 'solo',
  difficulty: 'beginner',
  requiredSkills: ['HTML', 'CSS', 'JavaScript'],
  estimatedTime: '1 week',
  status: 'in_progress',
  submissionUrl: '',
  feedback: [] as Feedback[]
};

export function ProjectView() {
  const { id } = useParams();
  const [project] = useState(mockProject);
  const [submissionUrl, setSubmissionUrl] = useState('');
  const [feedback, setFeedback] = useState('');
  const [skillRatings, setSkillRatings] = useState<Record<string, number>>(
    Object.fromEntries(project.requiredSkills.map(skill => [skill, 5]))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle project submission
    console.log('Project submitted:', submissionUrl);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    console.log('Feedback submitted:', { feedback, skillRatings });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Project Header */}
      <div className="bg-[#1A1F35] rounded-lg p-6 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
            <p className="text-gray-300">{project.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            {project.status === 'in_progress' ? (
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                In Progress
              </span>
            ) : project.status === 'completed' ? (
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                Completed
              </span>
            ) : (
              <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                Failed
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-400" />
            <span>{project.type === 'solo' ? 'Solo Project' : 'Group Project'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-400" />
            <span>{project.requiredSkills.join(', ')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-green-400" />
            <span>{project.estimatedTime}</span>
          </div>
        </div>
      </div>

      {/* Project Submission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#1A1F35] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Submit Your Project</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="submissionUrl" className="block text-sm font-medium mb-1">
                Project URL
              </label>
              <input
                type="url"
                id="submissionUrl"
                value={submissionUrl}
                onChange={(e) => setSubmissionUrl(e.target.value)}
                className="w-full bg-[#252B45] border border-[#3A3F55] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="https://github.com/your-username/project"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Submit Project
            </button>
          </form>
        </div>

        {/* Feedback Section */}
        <div className="bg-[#1A1F35] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Provide Feedback</h2>
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <div className="space-y-3">
              {project.requiredSkills.map((skill) => (
                <div key={skill}>
                  <label className="block text-sm font-medium mb-1">{skill} Proficiency</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setSkillRatings(prev => ({ ...prev, [skill]: rating }))}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          skillRatings[skill] >= rating
                            ? 'bg-purple-600 text-white'
                            : 'bg-[#252B45] text-gray-400'
                        }`}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium mb-1">
                Comments
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-[#252B45] border border-[#3A3F55] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
                placeholder="Share your thoughts about the project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>

      {/* Feedback History */}
      {project.feedback.length > 0 && (
        <div className="mt-8 bg-[#1A1F35] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Feedback History</h2>
          <div className="space-y-4">
            {project.feedback.map((item) => (
              <div key={item.id} className="border-b border-[#2A2F45] pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-medium">{item.reviewer}</span>
                    <span className="text-sm text-gray-400 ml-2">{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    {item.rating >= 4 ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mb-2">{item.comment}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skillRatings.map((rating) => (
                    <span
                      key={rating.skill}
                      className="bg-[#252B45] px-2 py-1 rounded text-sm"
                    >
                      {rating.skill}: {rating.rating}/5
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}