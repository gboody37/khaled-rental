'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Plus, 
  MapPin, 
  User, 
  DollarSign, 
  Calendar, 
  Edit2, 
  Trash2 
} from 'lucide-react';
import styles from './page.module.css';
import { getProperties, getTenant, deleteProperty, formatCurrency, formatDate } from '@/lib/data';

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState(null);
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const props = getProperties();
    setProperties(props);
    
    // Load tenants for each property
    const tenantData = {};
    props.forEach(p => {
      if (p.tenantId) {
        tenantData[p.tenantId] = getTenant(p.tenantId);
      }
    });
    setTenants(tenantData);
  };

  const confirmDelete = (property) => {
    setPropertyToDelete(property);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (propertyToDelete) {
      deleteProperty(propertyToDelete.id);
      setIsDeleteModalOpen(false);
      setPropertyToDelete(null);
      loadData();
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setPropertyToDelete(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="headline-md">My Properties</h1>
        <Link href="/properties/new" className="btn btn-primary">
          <Plus size={18} /> Add Property
        </Link>
      </header>

      {properties.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}><Building2 size={48} color="#8892a8" /></div>
          <h2 className="headline-sm">No properties yet</h2>
          <p className="text-muted" style={{ marginTop: 'var(--space-2)' }}>Add your first property to start managing rentals.</p>
          <Link href="/properties/new" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
            <Plus size={18} /> Add Property
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {properties.map(property => {
            const isOccupied = property.status === 'Occupied' || property.tenantId;
            const tenant = property.tenantId ? tenants[property.tenantId] : null;
            
            return (
              <div key={property.id} className="card">
                <div className={styles.cardHeader}>
                  <h3 className="headline-sm">{property.name}</h3>
                  <div className={styles.badges}>
                    {isOccupied ? (
                      <span className="badge badge-success">
                        <span className="badge-dot"></span> Occupied
                      </span>
                    ) : (
                      <span className="badge badge-warning">
                        <span className="badge-dot"></span> Vacant
                      </span>
                    )}
                    <span className="badge">{property.type || 'Property'}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.infoRow}>
                    <span className={styles.icon}><MapPin size={16} color="#e2c992" /></span> {property.address}
                  </p>
                  
                  {isOccupied && tenant && (
                    <p className={styles.infoRow}>
                      <span className={styles.icon}><User size={16} color="#38bdf8" /></span> 
                      <span>Tenant: <strong>{tenant.name}</strong></span>
                    </p>
                  )}
                  
                  <p className={styles.infoRow}>
                    <span className={styles.icon}><DollarSign size={16} color="#34d399" /></span> 
                    <span>Annual Rent: <strong>{formatCurrency(property.annualRent)}</strong></span>
                  </p>
                  
                  {property.rentalStart && property.rentalEnd && (
                    <p className={styles.infoRow}>
                      <span className={styles.icon}><Calendar size={16} color="#a855f7" /></span> 
                      <span>Lease: {formatDate(property.rentalStart)} – {formatDate(property.rentalEnd)}</span>
                    </p>
                  )}
                </div>

                <div className={styles.cardActions}>
                  <Link href={`/properties/${property.id}/edit`} className="btn btn-secondary btn-sm">
                    <Edit2 size={14} /> Edit Property
                  </Link>
                  <button 
                    onClick={() => confirmDelete(property)} 
                    className="btn btn-danger btn-sm"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="headline-sm" style={{ marginBottom: 'var(--space-4)' }}>Delete Property?</h3>
            <p style={{ color: 'var(--clr-on-surface-muted)', marginBottom: 'var(--space-6)' }}>
              Are you sure you want to delete <strong>{propertyToDelete?.name}</strong>? This action cannot be undone and will remove all associated payment data.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
              <button onClick={cancelDelete} className="btn btn-secondary">
                Cancel
              </button>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete Property
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
