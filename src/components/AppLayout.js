'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Bell, 
  Settings, 
  Home, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  Palette
} from 'lucide-react';
import styles from './AppLayout.module.css';

export default function AppLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('obsidian');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('app_theme') || 'obsidian';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'obsidian' ? 'nordic' : 'obsidian';
    setTheme(nextTheme);
    localStorage.setItem('app_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

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
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Properties', path: '/properties', icon: Building2 },
    { name: 'Renters', path: '/renters', icon: Users },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Settings', path: '/settings', icon: Settings },
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
            <span className={styles.logoIcon}><Home size={22} color="var(--clr-primary)" /></span>
            {!isCollapsed && <span className={styles.logoText}>Khaled Rentals</span>}
          </div>
          <button className={styles.closeMobileBtn} onClick={toggleMobileSidebar}>
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            const Icon = item.icon;
            return (
              <Link 
                href={item.path} 
                key={item.path}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                onClick={closeMobileSidebar}
                title={isCollapsed ? item.name : ''}
              >
                <span className={styles.navIcon}><Icon size={20} /></span>
                {!isCollapsed && <span className={styles.navText}>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.collapseBtn} onClick={toggleSidebar}>
            {isCollapsed ? <ChevronRight size={18} /> : <><ChevronLeft size={18} /> Collapse</>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <button className={styles.mobileMenuBtn} onClick={toggleMobileSidebar}>
              <Menu size={22} />
            </button>
            <h1 className={styles.pageTitle}>{getPageTitle()}</h1>
          </div>
          
          <div className={styles.topbarRight}>
            <span className={styles.currentDate}>{currentDate}</span>
            
            {/* Live Theme Switcher */}
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggleBtn}
              title="Click to switch between Monaco Obsidian and Nordic Slate themes"
            >
              <Palette size={16} />
              <span>{theme === 'obsidian' ? 'Monaco Gold' : 'Nordic Bronze'}</span>
            </button>

            <button className={styles.notificationBtn}>
              <Bell size={20} />
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
