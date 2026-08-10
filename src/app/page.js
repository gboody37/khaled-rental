'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Landmark,
  Banknote,
  Building2, 
  AlertTriangle,
  Send, 
  Calendar,
  Download,
  Plus
} from 'lucide-react';
import { getDashboardStats, formatCurrency } from '@/lib/data';
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
    if (stats && chartRef.current && typeof window !== 'undefined') {
      let isMounted = true;

      import('chart.js/auto').then(({ default: Chart }) => {
        if (!isMounted || !chartRef.current) return;

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, '#e2c992');
        gradient.addColorStop(1, 'rgba(181, 154, 93, 0.2)');

        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: stats.months || ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            datasets: [{
              label: 'Cashflow (JOD)',
              data: stats.revenueData || [10000, 12000, 11000, 15000, 11000, 19000],
              backgroundColor: gradient,
              borderColor: '#e2c992',
              borderWidth: 1,
              borderRadius: 4,
              barPercentage: 0.55
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#1a1c23',
                titleColor: '#e2c992',
                bodyColor: '#f3f4f6',
                borderColor: 'rgba(226, 201, 146, 0.3)',
                borderWidth: 1,
                callbacks: {
                  label: function(context) {
                    return ` Cashflow: ${formatCurrency(context.parsed.y)}`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { 
                  color: '#9ca3af',
                  font: { family: 'JetBrains Mono', size: 11 },
                  callback: function(val) { return val >= 1000 ? (val / 1000) + 'k' : val; }
                }
              },
              x: {
                grid: { display: false },
                ticks: { 
                  color: '#9ca3af',
                  font: { family: 'JetBrains Mono', size: 11 }
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
  }, [stats]);

  if (!stats) return <div className={styles.loading}>Loading Executive Dashboard...</div>;

  const upcomingSplits = [
    {
      id: '1',
      propertyName: 'Al-Hussein Apt 4',
      tenantName: 'Ahmad Al-Masri',
      amount: 3000,
      splitNum: 2,
      totalSplits: 4,
      dueDate: 'DUE: OCT 15',
      status: 'OVERDUE'
    },
    {
      id: '2',
      propertyName: 'Abdoun Villa B',
      tenantName: 'Sara Haddad',
      amount: 5000,
      splitNum: 1,
      totalSplits: 2,
      dueDate: 'DUE: NOV 01',
      status: 'PENDING'
    },
    {
      id: '3',
      propertyName: 'Dabouq Estate',
      tenantName: 'Rania Kassem',
      amount: 4000,
      splitNum: 3,
      totalSplits: 4,
      dueDate: 'DUE: DEC 10',
      status: 'PAID'
    }
  ];

  return (
    <div className={styles.dashboard}>
      {/* Top Title & Date Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.subtitle}>Executive dashboard for elite property management.</p>
        </div>
        
        <div className={styles.datePickerBadge}>
          <Calendar size={14} color="#e2c992" />
          <span>Nov 2026</span>
        </div>
      </div>

      {/* 4 Bento Stat Cards */}
      <div className={styles.statsGrid}>
        {/* Card 1: Total Annual Revenue */}
        <div className={styles.statCard}>
          <div className={styles.statTop}>
            <span className={styles.statLabel}>TOTAL ANNUAL REVENUE</span>
            <Landmark size={18} color="#e2c992" />
          </div>
          <div className={styles.statMain}>
            <h2 className={styles.statGoldValue}>120,000</h2>
            <span className={styles.currencyTag}>JOD</span>
          </div>
        </div>

        {/* Card 2: Monthly Cashflow */}
        <div className={styles.statCard}>
          <div className={styles.statTop}>
            <span className={styles.statLabel}>MONTHLY CASHFLOW</span>
            <Banknote size={18} color="#e2c992" />
          </div>
          <div className={styles.statMain}>
            <h2 className={styles.statWhiteValue}>10,000</h2>
            <span className={styles.currencyTag}>JOD</span>
          </div>
        </div>

        {/* Card 3: Occupancy */}
        <div className={styles.statCard}>
          <div className={styles.statTop}>
            <span className={styles.statLabel}>OCCUPANCY</span>
            <Building2 size={18} color="#e2c992" />
          </div>
          <div className={styles.statMainRow}>
            <h2 className={styles.statWhiteValue}>6<span className={styles.denom}> / 8</span></h2>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{ width: '75%' }}></div>
          </div>
          <p className={styles.statSubText}>PROPERTIES RENTED</p>
        </div>

        {/* Card 4: Action Required */}
        <div className={`${styles.statCard} ${styles.actionCard}`}>
          <div className={styles.statTop}>
            <span className={styles.actionLabel}>ACTION REQUIRED</span>
            <AlertTriangle size={18} color="#f87171" />
          </div>
          <div className={styles.statMain}>
            <h2 className={styles.statRedValue}>1</h2>
          </div>
          <span className={styles.overdueBadge}>OVERDUE INSTALLMENT</span>
        </div>
      </div>

      {/* Main Content Grid (Chart + Splits Timeline) */}
      <div className={styles.mainContent}>
        {/* Left: 6-Month Revenue Bar Chart */}
        <div className={styles.chartSection}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>6-Month Revenue</h2>
              <p className={styles.sectionSubtitle}>CASHFLOW PROJECTION (JOD)</p>
            </div>

            <button className={styles.exportBtn}>
              <Download size={14} /> EXPORT
            </button>
          </div>

          <div className={styles.chartContainer}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        {/* Right: Payment Splits Vertical Timeline */}
        <div className={styles.splitsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Payment Splits</h2>
            <Link href="/properties" className={styles.viewAllLink}>VIEW ALL</Link>
          </div>

          <div className={styles.timelineList}>
            {upcomingSplits.map((split) => {
              const statusBadgeClass = split.status === 'OVERDUE' ? styles.badgeOverdue :
                                       split.status === 'PENDING' ? styles.badgePending :
                                       styles.badgePaid;
              
              const dotClass = split.status === 'OVERDUE' ? styles.dotRed :
                               split.status === 'PENDING' ? styles.dotGold :
                               styles.dotGreen;

              return (
                <div key={split.id} className={styles.timelineItem}>
                  <div className={`${styles.timelineDot} ${dotClass}`}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.propertyName}>{split.propertyName}</h4>
                      <span className={`${styles.statusBadge} ${statusBadgeClass}`}>{split.status}</span>
                    </div>
                    <p className={styles.tenantName}>{split.tenantName}</p>
                    
                    <div className={styles.itemFooter}>
                      <span className={styles.splitNum}>SPLIT {split.splitNum} OF {split.totalSplits}</span>
                      <div className={styles.amountWrap}>
                        <span className={styles.amountVal}>{formatCurrency(split.amount)}</span>
                      </div>
                    </div>
                    <div className={styles.dueDateRow}>
                      <span className={styles.dueDateVal}>{split.dueDate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Link href="/notifications" className={styles.fabBtn}>
        <Plus size={16} /> QUICK NOTIFICATION
      </Link>
    </div>
  );
}
