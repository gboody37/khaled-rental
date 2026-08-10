'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Wrench, 
  Plus, 
  CreditCard, 
  CheckCircle
} from 'lucide-react';
import { getDashboardStats } from '@/lib/data';
import styles from './page.module.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const data = getDashboardStats();
    setStats(data);
  }, []);

  useEffect(() => {
    if (chartRef.current && typeof window !== 'undefined') {
      let isMounted = true;

      import('chart.js/auto').then(({ default: Chart }) => {
        if (!isMounted || !chartRef.current) return;

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
              label: 'Revenue (USD)',
              data: [18000, 22000, 26000, 31000, 38000, 42000, 47000, 53000],
              backgroundColor: '#10B981',
              borderRadius: 6,
              barPercentage: 0.55
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#1A2B3C',
                titleColor: '#FFFFFF',
                bodyColor: '#10B981',
                padding: 10,
                cornerRadius: 8
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748B', font: { family: 'Inter', size: 12 } }
              },
              y: {
                grid: { color: '#F1F5F9' },
                ticks: { 
                  color: '#64748B', 
                  font: { family: 'Inter', size: 12 },
                  callback: (value) => '$' + (value / 1000) + 'k'
                }
              }
            }
          }
        });
      });

      return () => {
        isMounted = false;
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <span className={styles.brandSubHeader}>ESTATEMASTER</span>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Welcome back, Khaled Rental Management.</p>
        </div>
        <div className={styles.actions}>
          <Link href="/properties/new" className="btn btn-primary">
            <Plus size={16} /> Add Property
          </Link>
          <button className="btn btn-secondary">
            <CreditCard size={16} /> Log Payment
          </button>
        </div>
      </div>

      {/* 4 Metric Bento Cards */}
      <div className={styles.bentoGrid}>
        {/* Card 1: Occupancy Rate */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Occupancy Rate</h2>
              <p className={styles.cardSub}>Across 45 active properties</p>
            </div>
            <span className={styles.statBadge}>
              <TrendingUp size={12} /> +2%
            </span>
          </div>
          <div className={styles.bigStat}>92%</div>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBarFill} style={{ width: '92%' }}></div>
          </div>
        </div>

        {/* Card 2: Rent Collection */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Rent Collection</h2>
          </div>
          <div className={styles.breakdownList}>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownLabel}>Paid</span>
              <span className={styles.breakdownValuePaid}>$42,500</span>
            </div>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownLabel}>Pending</span>
              <span className={styles.breakdownValuePending}>$8,200</span>
            </div>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownLabel}>Overdue</span>
              <span className={styles.breakdownValueOverdue}>$3,100</span>
            </div>
          </div>
        </div>

        {/* Card 3: Active Tenants */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardSub}>Active Tenants</p>
              <div className={styles.bigStat} style={{ marginTop: 8 }}>128</div>
            </div>
            <div className={styles.iconCircle}>
              <Users size={20} />
            </div>
          </div>
        </div>

        {/* Card 4: Open Maintenance */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardSub}>Open Maintenance</p>
              <div className={styles.bigStat} style={{ marginTop: 8 }}>12</div>
            </div>
            <div className={styles.iconCircleRed}>
              <Wrench size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Revenue Chart & Activity Feed */}
      <div className={styles.dashboardBottomGrid}>
        {/* Revenue Overview */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h2 className={styles.chartTitle}>Revenue Overview</h2>
            <select className={styles.selectInput}>
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className={styles.chartWrapper}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.activityCard}>
          <h2 className={styles.activityTitle}>Recent Activity</h2>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.iconCircle} style={{ width: 36, height: 36 }}>
                <CheckCircle size={18} color="#10B981" />
              </div>
              <div>
                <p className={styles.activityText}>Rent Paid - Apt 4B</p>
                <p className={styles.activityTime}>John Doe • 2 hours ago</p>
              </div>
            </div>

            <div className={styles.activityItem}>
              <div className={styles.iconCircleRed} style={{ width: 36, height: 36 }}>
                <Wrench size={18} color="#EF4444" />
              </div>
              <div>
                <p className={styles.activityText}>Maintenance Request</p>
                <p className={styles.activityTime}>Plumbing issue • 5 hours ago</p>
              </div>
            </div>

            <div className={styles.activityItem}>
              <div className={styles.iconCircle} style={{ width: 36, height: 36 }}>
                <Building2 size={18} color="#1A2B3C" />
              </div>
              <div>
                <p className={styles.activityText}>New Lease Signed</p>
                <p className={styles.activityTime}>Unit 12A • 1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
