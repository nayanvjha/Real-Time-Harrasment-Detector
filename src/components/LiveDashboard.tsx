import React, { useEffect, useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LiveDashboard: React.FC = () => {
  const [incidentData, setIncidentData] = useState({
    labels: [] as string[],
    datasets: [] as any[]
  });
  
  const [emotionData, setEmotionData] = useState({
    labels: [] as string[],
    datasets: [] as any[]
  });
  
  const [roleData, setRoleData] = useState({
    labels: [] as string[],
    datasets: [] as any[]
  });

  useEffect(() => {
    // Generate mock data
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    
    // Incident timeline data
    setIncidentData({
      labels,
      datasets: [
        {
          label: 'Incidents Detected',
          data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    });

    // Emotion distribution data
    setEmotionData({
      labels: ['Anger', 'Fear', 'Neutral', 'Surprise', 'Sadness', 'Disgust'],
      datasets: [
        {
          label: 'Emotion Distribution',
          data: Array.from({ length: 6 }, () => faker.number.int({ min: 10, max: 100 })),
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
          ],
        },
      ],
    });

    // Role distribution data
    setRoleData({
      labels: ['Perpetrator', 'Victim', 'Bystander'],
      datasets: [
        {
          label: 'Role Distribution',
          data: Array.from({ length: 3 }, () => faker.number.int({ min: 20, max: 100 })),
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
          ],
        },
      ],
    });
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Incidents</h3>
          <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            {faker.number.int({ min: 1000, max: 9999 })}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Active Alerts</h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400">
            {faker.number.int({ min: 0, max: 99 })}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Response Rate</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {faker.number.int({ min: 90, max: 99 })}%
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accuracy</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {faker.number.int({ min: 95, max: 99 })}%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Incident Timeline</h3>
          <Line
            data={incidentData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Emotion Distribution</h3>
          <Bar
            data={emotionData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Role Distribution</h3>
          <div className="w-full max-w-md mx-auto">
            <Doughnut
              data={roleData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {faker.lorem.words(3)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {faker.date.recent().toLocaleString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  index % 3 === 0
                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    : index % 3 === 1
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {index % 3 === 0 ? 'High' : index % 3 === 1 ? 'Medium' : 'Low'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;