import { useEffect, useRef } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { studentSkills } from '../../data/mockData';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SkillChart() {
  const data = {
    labels: studentSkills.labels,
    datasets: [
      {
        label: 'Skill Score',
        data: studentSkills.scores,
        backgroundColor: 'rgba(79, 70, 229, 0.15)',
        borderColor: '#6366F1',
        borderWidth: 2,
        pointBackgroundColor: '#4F46E5',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#4F46E5',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1E293B',
        titleFont: { family: 'Inter', size: 13, weight: '600' },
        bodyFont: { family: 'Inter', size: 12 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (ctx) => ` Score: ${ctx.raw}/100`,
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: { family: 'Inter', size: 11 },
          color: '#94A3B8',
          backdropColor: 'transparent',
        },
        pointLabels: {
          font: { family: 'Inter', size: 13, weight: '600' },
          color: '#334155',
        },
        grid: {
          color: '#E2E8F0',
        },
        angleLines: {
          color: '#E2E8F0',
        },
      },
    },
  };

  return (
    <div className="skill-chart">
      <div className="section-intro">
        <h2>📈 Skill Analytics</h2>
        <p>Your verified skill proficiency across key technical areas.</p>
      </div>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Radar data={data} options={options} />
        </div>
        <div className="skill-list">
          {studentSkills.labels.map((label, i) => (
            <div className="skill-list-item" key={i}>
              <div className="skill-list-info">
                <span className="skill-list-name">{label}</span>
                <span className="skill-list-score">{studentSkills.scores[i]}/100</span>
              </div>
              <div className="skill-list-bar">
                <div
                  className="skill-list-fill"
                  style={{
                    width: `${studentSkills.scores[i]}%`,
                    background: studentSkills.scores[i] >= 80
                      ? 'linear-gradient(90deg, #10B981, #34D399)'
                      : studentSkills.scores[i] >= 60
                      ? 'linear-gradient(90deg, #6366F1, #818CF8)'
                      : 'linear-gradient(90deg, #F59E0B, #FBBF24)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
