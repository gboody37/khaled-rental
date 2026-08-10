'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AppLayout.module.css';

export default function AppLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  const navItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Properties', path: '/properties', icon: '🏘️' },
    { name: 'Renters', path: '/renters', icon: '👥' },
    { name: 'Notifications', path: '/notifications', icon: '🔔' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  const getPageTitle = () => {
    const item = navItems.find(item => item.path === pathname || (pathname.startsWith(item.path) && item.path !== '/'));
    return item ? item.name : 'Dashboard';
  };

  const currentDate = mounted ? new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className={styles.layout}>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className={styles.overlay} onClick={closeMobileSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''} ${isMobileOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏠</span>
            {!isCollapsed && <span className={styles.logoText}>Khaled Rentals</span>}
          </div>
          <button className={styles.closeMobileBtn} onClick={toggleMobileSidebar}>
            ✖️
          </button>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            return (
              <Link 
                href={item.path} 
                key={item.path}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                onClick={closeMobileSidebar}
                title={isCollapsed ? item.name : ''}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {!isCollapsed && <span className={styles.navText}>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.collapseBtn} onClick={toggleSidebar}>
            {isCollapsed ? '➡️' : '⬅️ Collapse'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <button className={styles.mobileMenuBtn} onClick={toggleMobileSidebar}>
              ☰
            </button>
            <h1 className={styles.pageTitle}>{getPageTitle()}</h1>
          </div>
          
          <div className={styles.topbarRight}>
            <span className={styles.currentDate}>{currentDate}</span>
            <button className={styles.notificationBtn}>
              🔔
              <span className={styles.notificationBadge}>3</span>
            </button>
          </div>
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
