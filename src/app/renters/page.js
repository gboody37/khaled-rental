'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  DollarSign, 
  AlertTriangle, 
  Search, 
  Phone, 
  Home,
  Clock
} from 'lucide-react';

import styles from './page.module.css';
import { getTenants, getProperties, getPayments, formatCurrency, formatDate, getInitials } from '@/lib/data';

export default function RentersPage() {
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Active');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load data on mount
    setTenants(getTenants());
    setProperties(getProperties());
    setPayments(getPayments());
    setIsLoading(false);
  }, []);

  // Helper: Find property for a tenant
  const getTenantProperty = (propertyId) => {
    return properties.find(p => p.id === propertyId) || null;
  };

  // Helper: Determine payment status based on payments
  const getPaymentStatus = (tenantId) => {
    const tenantPayments = payments.filter(p => p.tenantId === tenantId);
    if (!tenantPayments || tenantPayments.length === 0) return 'Up to Date';
    
    const statuses = tenantPayments.map(p => p.status?.toLowerCase());
    if (statuses.includes('overdue')) return 'Overdue';
    if (statuses.includes('late')) return 'Late';
    return 'Up to Date';
  };

  // Helper: Calculate monthly payment
  const getMonthlyRent = (property) => {
    if (!property || !property.annualRent) return 0;
    return property.annualRent / 12;
  };

  // Filter tenants based on tab and search query
  const filteredTenants = tenants.filter(tenant => {
    // Determine active status: handle missing status as active for safety
    const isPast = tenant.status?.toLowerCase() === 'past' || tenant.status?.toLowerCase() === 'inactive';
    const isTabMatch = activeTab === 'Active' ? !isPast : isPast;

    const query = searchQuery.toLowerCase();
    const isSearchMatch = 
      tenant.name?.toLowerCase().includes(query) || 
      tenant.phone?.toLowerCase().includes(query);

    return isTabMatch && isSearchMatch;
  });

  // Derived Stats
  const activeRenters = tenants.filter(t => {
    const isPast = t.status?.toLowerCase() === 'past' || t.status?.toLowerCase() === 'inactive';
    return !isPast;
  });
  const totalActiveRentersCount = activeRenters.length;
  
  const totalMonthlyRevenue = activeRenters.reduce((sum, t) => {
    const prop = getTenantProperty(t.propertyId);
    return sum + getMonthlyRent(prop);
  }, 0);

  const overduePaymentsCount = tenants.filter(t => getPaymentStatus(t.id) === 'Overdue').length;

  if (isLoading) return null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Tenants</h1>
        
        <div className={styles.statsGrid}>
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-title">Total Active Renters</span>
              <span className="stat-icon" style={{ color: 'var(--clr-success)' }}><Users size={20} /></span>
            </div>
            <div className={styles.statValue}>{totalActiveRentersCount}</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-title">Total Monthly Revenue</span>
              <span className="stat-icon" style={{ color: 'var(--clr-warning)' }}><DollarSign size={20} /></span>
            </div>
            <div className={styles.statValue}>{formatCurrency(totalMonthlyRevenue)}</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-title">Overdue Payments</span>
              <span className="stat-icon" style={{ color: 'var(--clr-danger)' }}><AlertTriangle size={20} /></span>
            </div>
            <div className={styles.statValue}>{overduePaymentsCount}</div>
          </div>
        </div>
      </header>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}><Search size={16} color="#8892a8" /></span>
          <input 
            type="text"
            className={`form-input search-input ${styles.searchInput}`}
            placeholder="Search tenants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'Active' ? 'active' : ''}`}
            onClick={() => setActiveTab('Active')}
          >
            Active
          </button>
          <button 
            className={`tab ${activeTab === 'Past Tenants' ? 'active' : ''}`}
            onClick={() => setActiveTab('Past Tenants')}
          >
            Past Tenants
          </button>
        </div>
      </div>

      <div className={styles.tenantGrid}>
        {filteredTenants.length > 0 ? (
          filteredTenants.map(tenant => {
            const property = getTenantProperty(tenant.propertyId);
            const status = getPaymentStatus(tenant.id);
            const monthlyRent = getMonthlyRent(property);
            
            let badgeClass = 'badge-success';
            if (status === 'Late') badgeClass = 'badge-warning';
            if (status === 'Overdue') badgeClass = 'badge-danger';

            return (
              <div key={tenant.id} className={`card ${styles.tenantCard}`}>
                <div className={styles.cardHeader}>
                  <div className="avatar">
                    {getInitials(tenant.name)}
                  </div>
                  <div className={styles.tenantInfo}>
                    <h3 className={styles.tenantName}>{tenant.name}</h3>
                    <p className={styles.tenantPhone}>
                      <Phone size={14} style={{ display: 'inline', marginRight: '4px' }} /> {tenant.phone || 'N/A'}
                    </p>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}><Home size={14} style={{ display: 'inline', marginRight: '4px' }} /> Property</span>
                    <span className={styles.infoValue}>
                      {property ? property.name : 'Unassigned'}
                    </span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Annual Lease Total</span>
                    <span className={styles.infoValue}>
                      {property ? formatCurrency(property.annualRent) : 'N/A'}
                    </span>
                  </div>

                  {/* 💰 Prominent Payment Split Box on Tenant Cards */}
                  {property && (
                    <div className={styles.splitBreakdownBox}>
                      <div className={styles.splitBoxHeader}>
                        <Clock size={12} color="#e2c992" />
                        <span>PAYMENT SPLITS STRUCTURE</span>
                      </div>
                      <div className={styles.splitBoxMain}>
                        <span className={styles.splitBadgeVal}>{property.splitCount || 4} SPLITS PER YEAR</span>
                        <span className={styles.splitAmountVal}>
                          {formatCurrency(Math.round(property.annualRent / (property.splitCount || 4)))} / split
                        </span>
                      </div>
                      <p className={styles.splitFrequencyText}>
                        Installments due every {Math.round(12 / (property.splitCount || 4))} months ({property.splitCount || 4} payments total)
                      </p>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <span className={`badge ${badgeClass}`}>
                    {status}
                  </span>
                  {tenant.nextPaymentDate && (
                    <span className={styles.infoLabel}>
                      Next Due: {formatDate(tenant.nextPaymentDate)}
                    </span>
                  )}
                </div>

              </div>
            );
          })
        ) : (
          <div className={styles.emptyState}>
            <p>No tenants found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
