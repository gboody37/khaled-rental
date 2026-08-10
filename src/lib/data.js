/* ============================================
   Data Layer — localStorage Persistence
   Khaled Rental Management App
   ============================================ */

// ── Default Data ──
const DEFAULT_PROPERTIES = [
  {
    id: '1',
    name: 'Al-Hussein Apartment 4',
    address: 'Al-Hussein Street, Amman',
    type: 'Apartment',
    annualRent: 12000,
    rentalStart: '2026-01-01',
    rentalEnd: '2026-12-31',
    splitCount: 4,
    status: 'Occupied',
    tenantId: '1',
    notes: 'Recently renovated, 3 bedrooms',
    createdAt: '2026-01-01'
  },
  {
    id: '2',
    name: 'Jabal Amman Villa',
    address: 'Rainbow Street 45, Jabal Amman',
    type: 'Villa',
    annualRent: 24000,
    rentalStart: '2026-03-01',
    rentalEnd: '2027-02-28',
    splitCount: 3,
    status: 'Occupied',
    tenantId: '2',
    notes: 'Luxury villa with garden',
    createdAt: '2026-03-01'
  },
  {
    id: '3',
    name: 'Abdali Commercial Unit',
    address: 'Abdali Boulevard, Amman',
    type: 'Commercial',
    annualRent: 18000,
    rentalStart: '2026-02-01',
    rentalEnd: '2027-01-31',
    splitCount: 4,
    status: 'Occupied',
    tenantId: '3',
    notes: 'Ground floor shop space',
    createdAt: '2026-02-01'
  },
  {
    id: '4',
    name: 'Sweifieh Studio 12',
    address: 'Wasfi Al-Tal Street, Sweifieh',
    type: 'Apartment',
    annualRent: 6000,
    rentalStart: '2026-06-01',
    rentalEnd: '2027-05-31',
    splitCount: 2,
    status: 'Occupied',
    tenantId: '4',
    notes: 'Cozy studio near the mall',
    createdAt: '2026-06-01'
  },
  {
    id: '5',
    name: 'Dabouq Family House',
    address: 'Dabouq Hills, Amman',
    type: 'House',
    annualRent: 15000,
    rentalStart: '2025-09-01',
    rentalEnd: '2026-08-31',
    splitCount: 3,
    status: 'Occupied',
    tenantId: '5',
    notes: 'Spacious family home with parking',
    createdAt: '2025-09-01'
  },
  {
    id: '6',
    name: 'Mecca Street Office',
    address: 'Mecca Street 78, Amman',
    type: 'Commercial',
    annualRent: 9600,
    rentalStart: '',
    rentalEnd: '',
    splitCount: 4,
    status: 'Vacant',
    tenantId: null,
    notes: 'Available for lease, 2nd floor',
    createdAt: '2026-05-01'
  },
  {
    id: '7',
    name: 'Khalda Apartment 8',
    address: 'Gardens Street, Khalda',
    type: 'Apartment',
    annualRent: 8400,
    rentalStart: '2026-04-01',
    rentalEnd: '2027-03-31',
    splitCount: 4,
    status: 'Occupied',
    tenantId: '6',
    notes: '2 bedrooms, furnished',
    createdAt: '2026-04-01'
  },
  {
    id: '8',
    name: 'Shmeisani Penthouse',
    address: 'King Abdullah II Street, Shmeisani',
    type: 'Apartment',
    annualRent: 30000,
    rentalStart: '',
    rentalEnd: '',
    splitCount: 6,
    status: 'Vacant',
    tenantId: null,
    notes: 'Luxury penthouse with city view',
    createdAt: '2026-07-01'
  }
];

const DEFAULT_TENANTS = [
  { id: '1', name: 'Ahmad Al-Masri', phone: '+962 79 123 4567', email: 'ahmad@email.com', propertyId: '1', status: 'Active', createdAt: '2026-01-01' },
  { id: '2', name: 'Sara Khalil', phone: '+962 78 234 5678', email: 'sara@email.com', propertyId: '2', status: 'Active', createdAt: '2026-03-01' },
  { id: '3', name: 'Omar Trading Co.', phone: '+962 79 345 6789', email: 'omar@trading.com', propertyId: '3', status: 'Active', createdAt: '2026-02-01' },
  { id: '4', name: 'Layla Abu Rashed', phone: '+962 77 456 7890', email: 'layla@email.com', propertyId: '4', status: 'Active', createdAt: '2026-06-01' },
  { id: '5', name: 'Khaled Nasser', phone: '+962 79 567 8901', email: 'knasser@email.com', propertyId: '5', status: 'Active', createdAt: '2025-09-01' },
  { id: '6', name: 'Rania Suleiman', phone: '+962 78 678 9012', email: 'rania@email.com', propertyId: '7', status: 'Active', createdAt: '2026-04-01' },
  { id: '7', name: 'Fadi Qasem', phone: '+962 79 789 0123', email: 'fadi@email.com', propertyId: null, status: 'Past', createdAt: '2025-01-01' },
  { id: '8', name: 'Nour Haddad', phone: '+962 77 890 1234', email: 'nour@email.com', propertyId: null, status: 'Past', createdAt: '2025-03-01' },
];

const DEFAULT_PAYMENTS = [];
const DEFAULT_NOTIFICATIONS = [
  { id: '1', recipientType: 'Owner', recipientId: 'khaled', recipientName: 'Khaled (Owner)', subject: 'Monthly Revenue Report', message: 'Total revenue for July 2026 is 8,450 JOD. All properties are performing well. 2 payments are pending for next month.', priority: 'Normal', status: 'Read', sentAt: '2026-07-31T10:00:00' },
  { id: '2', recipientType: 'Tenant', recipientId: '1', recipientName: 'Ahmad Al-Masri', subject: 'Payment Reminder', message: 'Your next rent payment of 3,000 JOD is due on August 1st. Please ensure timely payment.', priority: 'Normal', status: 'Delivered', sentAt: '2026-07-28T09:00:00' },
  { id: '3', recipientType: 'Owner', recipientId: 'khaled', recipientName: 'Khaled (Owner)', subject: 'New Tenant Signed', message: 'Rania Suleiman has signed the lease for Khalda Apartment 8. Rental period: April 2026 - March 2027.', priority: 'Normal', status: 'Read', sentAt: '2026-04-01T14:00:00' },
];

// ── Generate payment splits for a property ──
function generatePaymentSplits(property) {
  if (!property.rentalStart || !property.rentalEnd || !property.splitCount) return [];

  const splits = [];
  const startDate = new Date(property.rentalStart);
  const endDate = new Date(property.rentalEnd);
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const intervalDays = totalDays / property.splitCount;
  const splitAmount = Math.round(property.annualRent / property.splitCount);

  for (let i = 0; i < property.splitCount; i++) {
    const dueDate = new Date(startDate.getTime() + intervalDays * (i + 1) * (1000 * 60 * 60 * 24));
    const today = new Date();
    let status = 'Pending';

    // Auto-set status based on dates for demo
    if (dueDate < today) {
      status = Math.random() > 0.2 ? 'Paid' : 'Overdue';
    }

    splits.push({
      id: `${property.id}-split-${i + 1}`,
      propertyId: property.id,
      tenantId: property.tenantId,
      amount: splitAmount,
      dueDate: dueDate.toISOString().split('T')[0],
      paidDate: status === 'Paid' ? new Date(dueDate.getTime() - Math.random() * 5 * 86400000).toISOString().split('T')[0] : null,
      status: status,
      splitNumber: i + 1,
      totalSplits: property.splitCount
    });
  }

  return splits;
}

// ── Initialize default data ──
function initializeData() {
  if (typeof window === 'undefined') return;

  if (!localStorage.getItem('rental_initialized')) {
    localStorage.setItem('rental_properties', JSON.stringify(DEFAULT_PROPERTIES));
    localStorage.setItem('rental_tenants', JSON.stringify(DEFAULT_TENANTS));
    localStorage.setItem('rental_notifications', JSON.stringify(DEFAULT_NOTIFICATIONS));

    // Generate payment splits for all occupied properties
    const allSplits = [];
    DEFAULT_PROPERTIES.forEach(p => {
      if (p.status === 'Occupied') {
        allSplits.push(...generatePaymentSplits(p));
      }
    });
    localStorage.setItem('rental_payments', JSON.stringify(allSplits));
    localStorage.setItem('rental_initialized', 'true');
  }
}

// ── CRUD Operations ──

// Properties
export function getProperties() {
  initializeData();
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('rental_properties') || '[]');
}

export function getProperty(id) {
  return getProperties().find(p => p.id === id);
}

export function saveProperty(property) {
  const properties = getProperties();
  const existing = properties.findIndex(p => p.id === property.id);

  if (existing >= 0) {
    properties[existing] = { ...properties[existing], ...property };
  } else {
    property.id = Date.now().toString();
    property.createdAt = new Date().toISOString().split('T')[0];
    properties.push(property);
  }

  localStorage.setItem('rental_properties', JSON.stringify(properties));

  // Regenerate splits for this property
  if (property.status === 'Occupied' && property.rentalStart && property.rentalEnd) {
    const payments = getPayments().filter(p => p.propertyId !== property.id);
    const newSplits = generatePaymentSplits(property);
    localStorage.setItem('rental_payments', JSON.stringify([...payments, ...newSplits]));
  }

  return property;
}

export function deleteProperty(id) {
  const properties = getProperties().filter(p => p.id !== id);
  localStorage.setItem('rental_properties', JSON.stringify(properties));

  // Remove associated payments
  const payments = getPayments().filter(p => p.propertyId !== id);
  localStorage.setItem('rental_payments', JSON.stringify(payments));
}

// Tenants
export function getTenants() {
  initializeData();
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('rental_tenants') || '[]');
}

export function getTenant(id) {
  return getTenants().find(t => t.id === id);
}

export function saveTenant(tenant) {
  const tenants = getTenants();
  const existing = tenants.findIndex(t => t.id === tenant.id);

  if (existing >= 0) {
    tenants[existing] = { ...tenants[existing], ...tenant };
  } else {
    tenant.id = Date.now().toString();
    tenant.createdAt = new Date().toISOString().split('T')[0];
    tenants.push(tenant);
  }

  localStorage.setItem('rental_tenants', JSON.stringify(tenants));
  return tenant;
}

export function deleteTenant(id) {
  const tenants = getTenants().filter(t => t.id !== id);
  localStorage.setItem('rental_tenants', JSON.stringify(tenants));
}

// Payments
export function getPayments() {
  initializeData();
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('rental_payments') || '[]');
}

export function updatePaymentStatus(paymentId, status) {
  const payments = getPayments();
  const idx = payments.findIndex(p => p.id === paymentId);
  if (idx >= 0) {
    payments[idx].status = status;
    if (status === 'Paid') {
      payments[idx].paidDate = new Date().toISOString().split('T')[0];
    }
    localStorage.setItem('rental_payments', JSON.stringify(payments));
  }
}

// Notifications
export function getNotifications() {
  initializeData();
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('rental_notifications') || '[]');
}

export function sendNotification(notification) {
  const notifications = getNotifications();
  notification.id = Date.now().toString();
  notification.sentAt = new Date().toISOString();
  notification.status = 'Sent';
  notifications.unshift(notification);
  localStorage.setItem('rental_notifications', JSON.stringify(notifications));
  return notification;
}

// ── Dashboard Analytics ──
export function getDashboardStats() {
  const properties = getProperties();
  const tenants = getTenants();
  const payments = getPayments();

  const occupiedProperties = properties.filter(p => p.status === 'Occupied');
  const totalAnnualRevenue = occupiedProperties.reduce((sum, p) => sum + p.annualRent, 0);
  const monthlyRevenue = Math.round(totalAnnualRevenue / 12);
  const activeRenters = tenants.filter(t => t.status === 'Active').length;
  const pendingSplits = payments.filter(p => p.status === 'Pending').length;
  const overdueSplits = payments.filter(p => p.status === 'Overdue').length;

  // Monthly revenue data for chart (simulated for past 6 months)
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const revenueData = months.map((_, i) => {
    const base = monthlyRevenue;
    const variance = Math.round(base * (0.85 + Math.random() * 0.3));
    return variance;
  });

  // Upcoming payments
  const today = new Date();
  const upcomingPayments = payments
    .filter(p => p.status === 'Pending' || p.status === 'Overdue')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 6)
    .map(payment => {
      const property = properties.find(p => p.id === payment.propertyId);
      const tenant = tenants.find(t => t.id === payment.tenantId);
      return {
        ...payment,
        propertyName: property?.name || 'Unknown',
        tenantName: tenant?.name || 'Unknown'
      };
    });

  // Recent activity
  const recentActivity = [
    { id: 1, type: 'payment', text: 'Ahmad Al-Masri paid 3,000 JOD for Al-Hussein Apt 4', time: '2 hours ago', icon: '💰' },
    { id: 2, type: 'notification', text: 'Payment reminder sent to Sara Khalil', time: '5 hours ago', icon: '🔔' },
    { id: 3, type: 'property', text: 'Shmeisani Penthouse listed as vacant', time: '1 day ago', icon: '🏠' },
    { id: 4, type: 'payment', text: 'Omar Trading Co. payment overdue - Abdali Unit', time: '2 days ago', icon: '⚠️' },
    { id: 5, type: 'tenant', text: 'Rania Suleiman lease renewed for Khalda Apt 8', time: '3 days ago', icon: '📝' },
    { id: 6, type: 'payment', text: 'Khaled Nasser paid 5,000 JOD for Dabouq House', time: '5 days ago', icon: '💰' },
  ];

  return {
    totalRevenue: totalAnnualRevenue,
    monthlyRevenue,
    activeProperties: occupiedProperties.length,
    vacantProperties: properties.length - occupiedProperties.length,
    totalProperties: properties.length,
    activeRenters,
    pendingSplits,
    overdueSplits,
    months,
    revenueData,
    upcomingPayments,
    recentActivity
  };
}

// ── Utility Functions ──
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-JO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount) + ' JOD';
}

export function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

export function calculateSplitPreview(annualRent, splitCount, startDate, endDate) {
  if (!annualRent || !splitCount || !startDate || !endDate) return [];

  const splits = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = (end - start) / (1000 * 60 * 60 * 24);
  const intervalDays = totalDays / splitCount;
  const splitAmount = Math.round(annualRent / splitCount);

  for (let i = 0; i < splitCount; i++) {
    const dueDate = new Date(start.getTime() + intervalDays * (i + 1) * (1000 * 60 * 60 * 24));
    splits.push({
      number: i + 1,
      amount: splitAmount,
      dueDate: dueDate.toISOString().split('T')[0]
    });
  }

  return splits;
}

// Reset all data to defaults
export function resetData() {
  localStorage.removeItem('rental_initialized');
  localStorage.removeItem('rental_properties');
  localStorage.removeItem('rental_tenants');
  localStorage.removeItem('rental_payments');
  localStorage.removeItem('rental_notifications');
  initializeData();
}
