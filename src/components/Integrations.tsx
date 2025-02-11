import React from 'react';
import { 
  MessageSquare as Slack, 
  Github, 
  Pen as Figma, 
  Layout as Trello, 
  Settings as Notion, 
  Cloud as Dropbox, 
  HardDrive as GoogleDrive, 
  Calendar 
} from 'lucide-react';

const integrations = [
  { icon: <Slack className="w-8 h-8" />, name: 'Slack' },
  { icon: <Github className="w-8 h-8" />, name: 'GitHub' },
  { icon: <Figma className="w-8 h-8" />, name: 'Figma' },
  { icon: <Trello className="w-8 h-8" />, name: 'Trello' },
  { icon: <Notion className="w-8 h-8" />, name: 'Notion' },
  { icon: <Dropbox className="w-8 h-8" />, name: 'Dropbox' },
  { icon: <GoogleDrive className="w-8 h-8" />, name: 'Drive' },
  { icon: <Calendar className="w-8 h-8" />, name: 'Calendar' }
];

export default function Integrations() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with your favorite tools and boost your workflow productivity
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 
                       hover:bg-gradient-to-br from-purple-500 to-blue-500
                       transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors">
                  {integration.icon}
                </div>
                <p className="mt-4 font-medium text-gray-900 dark:text-white group-hover:text-white">
                  {integration.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}