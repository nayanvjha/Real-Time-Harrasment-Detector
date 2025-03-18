import React, { useState, useEffect } from 'react';
import { Download, Filter, Calendar, AlertTriangle, Shield, FileText, Users } from 'lucide-react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import AIActivityVisualizer from './3D/AIActivityVisualizer';
import GlowingButton from './UI/GlowingButton';
import HolographicCard from './UI/HolographicCard';
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

const AdminDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('24h');
  const [filterType, setFilterType] = useState('all');
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    setChartData({
      labels,
      datasets: [
        {
          label: 'Incidents',
          data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          borderColor: '#00FFFF',
          backgroundColor: 'rgba(0, 255, 255, 0.1)',
          fill: true,
        }
      ]
    });
  }, []);

  const incidents = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    timestamp: faker.date.recent(),
    type: faker.helpers.arrayElement(['Verbal', 'Physical', 'Cyber']),
    severity: faker.helpers.arrayElement(['High', 'Medium', 'Low']),
    status: faker.helpers.arrayElement(['Open', 'Under Investigation', 'Closed']),
    location: faker.location.streetAddress(),
    evidence: faker.number.int({ min: 1, max: 5 })
  }));

  if (!chartData) return null;

  return (
    <div className="min-h-screen bg-forensic-primary text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-forensic-cyan mb-2">
              Forensic Analysis Dashboard
            </h1>
            <p className="text-forensic-muted">
              Real-time monitoring and analysis of incidents
            </p>
          </div>
          <div className="flex space-x-4">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-forensic-secondary text-forensic-cyan border border-forensic-cyan/30 rounded px-4 py-2"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            <GlowingButton variant="primary">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </GlowingButton>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Cases', value: '2,547', icon: <Shield className="w-6 h-6" />, color: 'cyan' },
            { label: 'Active Investigations', value: '183', icon: <AlertTriangle className="w-6 h-6" />, color: 'gold' },
            { label: 'Evidence Collected', value: '12,938', icon: <FileText className="w-6 h-6" />, color: 'accent' },
            { label: 'Success Rate', value: '94.7%', icon: <Users className="w-6 h-6" />, color: 'cyan' }
          ].map((stat, index) => (
            <HolographicCard key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-forensic-muted">{stat.label}</p>
                  <p className={`text-2xl font-bold text-forensic-${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`text-forensic-${stat.color}`}>{stat.icon}</div>
              </div>
            </HolographicCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <HolographicCard className="p-6">
            <h2 className="text-xl font-bold text-forensic-cyan mb-4">AI Activity Monitor</h2>
            <AIActivityVisualizer />
          </HolographicCard>

          <HolographicCard className="p-6">
            <h2 className="text-xl font-bold text-forensic-cyan mb-4">Incident Timeline</h2>
            <Line
              data={chartData}
              options={{
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0, 255, 255, 0.1)',
                    },
                    ticks: {
                      color: '#888888'
                    }
                  },
                  x: {
                    grid: {
                      color: 'rgba(0, 255, 255, 0.1)',
                    },
                    ticks: {
                      color: '#888888'
                    }
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </HolographicCard>
        </div>

        <HolographicCard className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-forensic-cyan">Recent Incidents</h2>
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-forensic-secondary text-forensic-cyan border border-forensic-cyan/30 rounded px-4 py-2"
            >
              <option value="all">All Types</option>
              <option value="verbal">Verbal</option>
              <option value="physical">Physical</option>
              <option value="cyber">Cyber</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-forensic-cyan/20">
                  <th className="pb-3 text-forensic-cyan">ID</th>
                  <th className="pb-3 text-forensic-cyan">Time</th>
                  <th className="pb-3 text-forensic-cyan">Type</th>
                  <th className="pb-3 text-forensic-cyan">Severity</th>
                  <th className="pb-3 text-forensic-cyan">Status</th>
                  <th className="pb-3 text-forensic-cyan">Location</th>
                  <th className="pb-3 text-forensic-cyan">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((incident) => (
                  <tr key={incident.id} className="border-b border-forensic-cyan/10">
                    <td className="py-4 text-sm">{incident.id.slice(0, 8)}</td>
                    <td className="py-4 text-sm">{incident.timestamp.toLocaleString()}</td>
                    <td className="py-4 text-sm">{incident.type}</td>
                    <td className="py-4 text-sm">
                      <span className={`px-2 py-1 rounded text-xs ${
                        incident.severity === 'High' ? 'bg-forensic-accent text-white' :
                        incident.severity === 'Medium' ? 'bg-forensic-gold text-forensic-primary' :
                        'bg-forensic-cyan text-forensic-primary'
                      }`}>
                        {incident.severity}
                      </span>
                    </td>
                    <td className="py-4 text-sm">{incident.status}</td>
                    <td className="py-4 text-sm">{incident.location}</td>
                    <td className="py-4 text-sm">{incident.evidence} files</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HolographicCard>
      </div>
    </div>
  );
};

export default AdminDashboard;