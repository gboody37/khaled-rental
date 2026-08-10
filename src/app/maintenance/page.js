'use client';

import React, { useState } from 'react';
import { Wrench, Plus, CheckCircle, Clock, Building2, User } from 'lucide-react';
import styles from './page.module.css';

export default function MaintenancePage() {
  const tickets = [
    {
      id: 'TKT-892',
      title: 'Leaking Sink in Kitchen',
      property: '142 Oakwood Ave, Apt 4B',
      tenant: 'Sarah Jenkins',
      priority: 'HIGH',
      status: 'New',
      time: '2h ago',
      assignedTo: 'Unassigned'
    },
    {
      id: 'TKT-894',
      title: 'Hallway light bulb burnt out',
      property: '88 Pine St, Common Area',
      tenant: 'Kevin M.',
      priority: 'LOW',
      status: 'New',
      time: '5h ago',
      assignedTo: 'Unassigned'
    },
    {
      id: 'TKT-889',
      title: 'HVAC making rattling noise',
      property: '500 Central Plaza, Suite 200',
      tenant: 'Apex Cooling Inc.',
      priority: 'MEDIUM',
      status: 'In Progress',
      time: 'ETA Today 2PM',
      assignedTo: 'Mike R.'
    },
    {
      id: 'TKT-885',
      title: 'Replace broken blinds',
      property: '12 Maple Dr, Unit C',
      tenant: 'Closed by Mike R.',
      priority: 'CLOSED',
      status: 'Resolved',
      time: 'Yesterday',
      assignedTo: 'Mike R.'
    },
    {
      id: 'TKT-880',
      title: 'Paint touch-ups in lobby',
      property: '88 Pine St, Common Area',
      tenant: 'Closed by Staff',
      priority: 'CLOSED',
      status: 'Resolved',
      time: 'Oct 12',
      assignedTo: 'Staff'
    }
  ];

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'HIGH':
        return <span className={`${styles.badge} ${styles.highPriority}`}>HIGH PRIORITY</span>;
      case 'MEDIUM':
        return <span className={`${styles.badge} ${styles.mediumPriority}`}>MEDIUM PRIORITY</span>;
      case 'LOW':
        return <span className={`${styles.badge} ${styles.lowPriority}`}>LOW PRIORITY</span>;
      default:
        return <span className={`${styles.badge} ${styles.closedPriority}`}>RESOLVED</span>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Maintenance Board</h1>
          <p className={styles.subtitle}>Manage active service requests across all properties.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} /> New Request
        </button>
      </div>

      {/* Kanban Board Columns */}
      <div className={styles.board}>
        {/* Column 1: New */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <div className={styles.columnTitleGroup}>
              <span className={`${styles.statusDot} ${styles.dotNew}`}></span>
              <h3>New Requests</h3>
            </div>
            <span className={styles.counter}>2</span>
          </div>

          <div className={styles.ticketList}>
            {tickets.filter(t => t.status === 'New').map(ticket => (
              <div key={ticket.id} className={styles.ticketCard}>
                <div className={styles.ticketHeader}>
                  <span className={styles.ticketId}>#{ticket.id}</span>
                  {getPriorityBadge(ticket.priority)}
                </div>
                <h4 className={styles.ticketTitle}>{ticket.title}</h4>
                <p className={styles.ticketProperty}><Building2 size={13} /> {ticket.property}</p>
                <p className={styles.ticketTenant}><User size={13} /> {ticket.tenant}</p>
                <div className={styles.ticketFooter}>
                  <span className={styles.ticketTime}><Clock size={12} /> {ticket.time}</span>
                  <button className={styles.actionBtn}>Assign</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: In Progress */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <div className={styles.columnTitleGroup}>
              <span className={`${styles.statusDot} ${styles.dotProgress}`}></span>
              <h3>In Progress</h3>
            </div>
            <span className={styles.counter}>1</span>
          </div>

          <div className={styles.ticketList}>
            {tickets.filter(t => t.status === 'In Progress').map(ticket => (
              <div key={ticket.id} className={styles.ticketCard}>
                <div className={styles.ticketHeader}>
                  <span className={styles.ticketId}>#{ticket.id}</span>
                  {getPriorityBadge(ticket.priority)}
                </div>
                <h4 className={styles.ticketTitle}>{ticket.title}</h4>
                <p className={styles.ticketProperty}><Building2 size={13} /> {ticket.property}</p>
                <p className={styles.ticketTenant}><User size={13} /> Assigned: {ticket.assignedTo}</p>
                <div className={styles.ticketFooter}>
                  <span className={styles.ticketTime}><Clock size={12} /> {ticket.time}</span>
                  <button className={styles.actionBtnSuccess}>Complete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Resolved */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <div className={styles.columnTitleGroup}>
              <span className={`${styles.statusDot} ${styles.dotResolved}`}></span>
              <h3>Resolved</h3>
            </div>
            <span className={styles.counter}>2</span>
          </div>

          <div className={styles.ticketList}>
            {tickets.filter(t => t.status === 'Resolved').map(ticket => (
              <div key={ticket.id} className={`${styles.ticketCard} ${styles.resolvedCard}`}>
                <div className={styles.ticketHeader}>
                  <span className={styles.ticketId}>#{ticket.id}</span>
                  <CheckCircle size={14} color="#10b981" />
                </div>
                <h4 className={styles.ticketTitle}>{ticket.title}</h4>
                <p className={styles.ticketProperty}><Building2 size={13} /> {ticket.property}</p>
                <p className={styles.ticketTenant}>{ticket.tenant}</p>
                <div className={styles.ticketFooter}>
                  <span className={styles.ticketTime}><Clock size={12} /> {ticket.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
