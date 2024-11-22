import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Led the development of a microservices-based e-commerce platform serving over 1M users. Implemented CI/CD pipelines and mentored junior developers.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple web applications using React and Node.js. Improved application performance by 40% through optimization.',
  },
  {
    title: 'Software Developer',
    company: 'StartUp Hub',
    period: '2018 - 2019',
    description: 'Built MVPs for various startup clients using modern web technologies. Worked directly with clients to gather requirements and implement solutions.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Experience
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;