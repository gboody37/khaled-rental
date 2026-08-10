'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Calendar,
  Bell, 
  Settings, 
  Plus, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import styles from './AppLayout.module.css';

export default function AppLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', 'obsidian');
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

  const mainNavItems = [
    { name: 'DASHBOARD', path: '/', icon: LayoutDashboard },
    { name: 'PROPERTIES', path: '/properties', icon: Building2 },
    { name: 'RENTERS', path: '/renters', icon: Users },
    { name: 'MAINTENANCE', path: '/maintenance', icon: Wrench },
    { name: 'PAYMENT SPLITS', path: '/', icon: Calendar },
    { name: 'NOTIFICATIONS', path: '/notifications', icon: Bell },
  ];

  const currentDate = mounted ? new Date().toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  }) : 'Nov 2026';

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
            <div className={styles.avatarBadge}>
              <ShieldCheck size={20} color="#10b981" />
            </div>
            {!isCollapsed && (
              <div className={styles.brandGroup}>
                <span className={styles.logoText}>Khaled Rentals</span>
                <span className={styles.subtitleText}>ESTATEMASTER</span>
              </div>
            )}
          </div>
          <button className={styles.closeMobileBtn} onClick={toggleMobileSidebar}>
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          {mainNavItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            const Icon = item.icon;
            return (
              <Link 
                href={item.path} 
                key={item.name}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                onClick={closeMobileSidebar}
                title={isCollapsed ? item.name : ''}
              >
                <span className={styles.navIcon}><Icon size={18} /></span>
                {!isCollapsed && <span className={styles.navText}>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <Link 
            href="/settings"
            className={`${styles.navItem} ${styles.settingsLink} ${pathname === '/settings' ? styles.active : ''}`}
            onClick={closeMobileSidebar}
          >
            <span className={styles.navIcon}><Settings size={18} /></span>
            {!isCollapsed && <span className={styles.navText}>SETTINGS</span>}
          </Link>

          {!isCollapsed ? (
            <Link href="/properties/new" className={styles.addPropertyBtn}>
              <Plus size={16} /> NEW PROPERTY
            </Link>
          ) : (
            <Link href="/properties/new" className={styles.addPropertyBtnIcon} title="New Property">
              <Plus size={18} />
            </Link>
          )}

          <button className={styles.collapseBtn} onClick={toggleSidebar}>
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.topbarMobile}>
          <button className={styles.mobileMenuBtn} onClick={toggleMobileSidebar}>
            <Menu size={22} />
          </button>
          <span className={styles.mobileBrand}>Khaled Rentals</span>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
