'use client';

import React, { useState } from 'react';
import { User, Bell, Lock, Database, Shield, Save, RefreshCw } from 'lucide-react';
import styles from './page.module.css';
import { resetData } from '@/lib/data';

export default function SettingsPage() {
  const [ownerName, setOwnerName] = useState('Khaled');
  const [currency, setCurrency] = useState('JOD');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(true);
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset sample data to defaults?')) {
      resetData();
      window.location.reload();
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="headline-md">Settings</h1>
      </header>

      {savedToast && (
        <div className={styles.toast}>
          ✓ Settings saved successfully!
        </div>
      )}

      <div className={styles.grid}>
        {/* Profile / General Settings */}
        <div className="card">
          <h2 className="headline-sm" style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={20} color="#f59e0b" /> Owner Profile
          </h2>
          <form onSubmit={handleSave} className="form-group">
            <div className="form-group">
              <label className="form-label">Owner Name</label>
              <input 
                type="text" 
                className="form-input" 
                value={ownerName} 
                onChange={(e) => setOwnerName(e.target.value)} 
              />
            </div>
            <div className="form-group" style={{ marginTop: 'var(--space-3)' }}>
              <label className="form-label">Default Currency</label>
              <select 
                className="form-select" 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="JOD">JOD - Jordanian Dinar</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
              <Save size={16} /> Save Changes
            </button>
          </form>
        </div>

        {/* Notifications Preference */}
        <div className="card">
          <h2 className="headline-sm" style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bell size={20} color="#3b82f6" /> Notification Preferences
          </h2>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={emailNotifs} 
                onChange={(e) => setEmailNotifs(e.target.checked)} 
                style={{ width: '18px', height: '18px', accentColor: '#f59e0b' }}
              />
              <span>Send payment reminders via Email</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginTop: 'var(--space-3)' }}>
              <input 
                type="checkbox" 
                checked={smsNotifs} 
                onChange={(e) => setSmsNotifs(e.target.checked)} 
                style={{ width: '18px', height: '18px', accentColor: '#f59e0b' }}
              />
              <span>Send urgent updates to Khaled (Owner)</span>
            </label>
          </div>
        </div>

        {/* Data Reset */}
        <div className="card">
          <h2 className="headline-sm" style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Database size={20} color="#ef4444" /> Sample Data Reset
          </h2>
          <p style={{ color: 'var(--clr-on-surface-muted)', fontSize: '0.9rem', marginBottom: 'var(--space-4)' }}>
            Reset local property and tenant data back to default sample state.
          </p>
          <button onClick={handleResetData} className="btn btn-danger">
            <RefreshCw size={16} /> Reset Sample Data
          </button>
        </div>
      </div>
    </div>
  );
}
