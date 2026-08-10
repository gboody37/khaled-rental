'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  DollarSign, 
  Calendar, 
  Building2, 
  Users, 
  Send, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { getDashboardStats, formatCurrency, formatDate } from '@/lib/data';
import styles from './page.module.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Load data on mount
    const data = getDashboardStats();
    setStats(data);
  }, []);

  useEffect(() => {
    if (stats && chartRef.current && typeof window !== 'undefined') {
      let isMounted = true;

      import('chart.js/auto').then(({ default: Chart }) => {
        if (!isMounted || !chartRef.current) return;

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(245, 158, 11, 0.8)');
        gradient.addColorStop(1, 'rgba(245, 158, 11, 0.2)');

        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: stats.months || ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
              label: 'Monthly Revenue',
              data: stats.revenueData || [0, 0, 0, 0, 0, 0],
              backgroundColor: gradient,
              borderColor: '#f59e0b',
              borderWidth: 1,
              borderRadius: 4,
              barPercentage: 0.6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#171f33',
                titleColor: '#dae2fd',
                bodyColor: '#dae2fd',
                borderColor: '#f59e0b',
                borderWidth: 1,
                callbacks: {
                  label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if (context.parsed.y !== null) {
                      label += formatCurrency(context.parsed.y);
                    }
                    return label;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: 'rgba(136, 146, 168, 0.1)' },
                ticks: { color: '#8892a8' }
              },
              x: {
                grid: { display: false },
                ticks: { color: '#8892a8' }
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
  }, [stats]);

  if (!stats) return <div className={styles.loading}>Loading Dashboard...</div>;

  const upcomingSplits = stats.upcomingPayments || stats.upcomingSplits || [];
  const recentActivity = stats.recentActivity || [];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard Overview</h1>
        <p className={styles.subtitle}>Welcome back, here's what's happening today.</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} animate-in`} style={{'--stagger': 1}}>
          <div className={styles.statIcon} style={{background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b'}}>
            <DollarSign size={24} />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Total Revenue</p>
            <h3 className={styles.statValue}>{formatCurrency(stats.totalRevenue || 0)}</h3>
            <p className={styles.statChange}>
              <span className={styles.positive}><ArrowUpRight size={14} /> 12.5%</span> vs last month
            </p>
          </div>
        </div>

        <div className={`${styles.statCard} animate-in`} style={{'--stagger': 2}}>
          <div className={styles.statIcon} style={{background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6'}}>
            <Calendar size={24} />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Monthly Income</p>
            <h3 className={styles.statValue}>{formatCurrency(stats.monthlyRevenue || stats.monthlyIncome || 0)}</h3>
            <p className={styles.statChange}>
              <span className={styles.positive}><ArrowUpRight size={14} /> 8.2%</span> vs last month
            </p>
          </div>
        </div>

        <div className={`${styles.statCard} animate-in`} style={{'--stagger': 3}}>
          <div className={styles.statIcon} style={{background: 'rgba(74, 222, 128, 0.15)', color: '#4ade80'}}>
            <Building2 size={24} />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Active Properties</p>
            <h3 className={styles.statValue}>{stats.activeProperties || 0}</h3>
            <p className={styles.statChange}>
              <span>{stats.vacantProperties || 0} vacant properties</span>
            </p>
          </div>
        </div>

        <div className={`${styles.statCard} animate-in`} style={{'--stagger': 4}}>
          <div className={styles.statIcon} style={{background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7'}}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Active Renters</p>
            <h3 className={styles.statValue}>{stats.activeRenters || 0}</h3>
            <p className={styles.statChange}>
              <span className={styles.positive}><ArrowUpRight size={14} /> 2</span> new this month
            </p>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={`${styles.chartSection} card animate-in`} style={{'--stagger': 5}}>
          <h2 className={styles.sectionTitle}>Revenue Overview</h2>
          <div className={styles.chartContainer}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        <div className={styles.sideContent}>
          <div className={`${styles.splitsCard} card animate-in`} style={{'--stagger': 6}}>
            <h2 className={styles.sectionTitle}>Upcoming Payment Splits</h2>
            <div className={styles.splitsList}>
              {upcomingSplits.length === 0 ? (
                <p className={styles.emptyText}>No upcoming split payments</p>
              ) : (
                upcomingSplits.map((split, i) => {
                  const statusClass = split.status === 'Paid' ? 'badge-success' : split.status === 'Overdue' ? 'badge-danger' : 'badge-warning';
                  return (
                    <div key={split.id || i} className={styles.splitItem}>
                      <div className={styles.splitMain}>
                        <h4>{split.propertyName || split.property || 'Property'}</h4>
                        <p>{split.tenantName || split.tenant || 'Tenant'}</p>
                      </div>
                      <div className={styles.splitDetails}>
                        <div className={styles.splitAmount}>{formatCurrency(split.amount)}</div>
                        <div className={styles.splitMeta}>
                          <span className={styles.splitNum}>Split {split.splitNumber || i + 1} of {split.totalSplits || 4}</span>
                          <span className={styles.splitDate}>{formatDate(split.dueDate)}</span>
                        </div>
                      </div>
                      <div className={styles.splitStatus}>
                        <span className={`badge ${statusClass}`}>{split.status}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className={`${styles.activityCard} card animate-in`} style={{'--stagger': 7}}>
            <h2 className={styles.sectionTitle}>Recent Activity</h2>
            <div className={styles.activityList}>
              {recentActivity.map((act, i) => (
                <div key={act.id || i} className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    {act.type === 'payment' ? <DollarSign size={16} color="#f59e0b" /> :
                     act.type === 'notification' ? <Send size={16} color="#3b82f6" /> :
                     act.type === 'property' ? <Building2 size={16} color="#4ade80" /> :
                     act.type === 'tenant' ? <Users size={16} color="#a855f7" /> :
                     <Clock size={16} color="#8892a8" />}
                  </div>
                  <div className={styles.activityDetails}>
                    <p>{act.text || act.description}</p>
                    <span>{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link href="/notifications" className={`${styles.fab} btn btn-primary`}>
        <Send size={18} /> Quick Send Notification
      </Link>
    </div>
  );
}
