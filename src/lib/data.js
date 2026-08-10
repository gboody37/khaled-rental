/* ============================================
   Data Layer — Persistence & Database Ready
   Khaled Rental Management App
   ============================================ */

// ── Default Clean State ──
const DEFAULT_PROPERTIES = [];
const DEFAULT_TENANTS = [];
const DEFAULT_PAYMENTS = [];
const DEFAULT_NOTIFICATIONS = [];

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
    let status = 'Pending';

    splits.push({
      id: `${property.id}-split-${i + 1}`,
      propertyId: property.id,
      tenantId: property.tenantId,
      amount: splitAmount,
      dueDate: dueDate.toISOString().split('T')[0],
      paidDate: null,
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

  if (!localStorage.getItem('rental_v2_clean')) {
    localStorage.setItem('rental_properties', JSON.stringify(DEFAULT_PROPERTIES));
    localStorage.setItem('rental_tenants', JSON.stringify(DEFAULT_TENANTS));
    localStorage.setItem('rental_notifications', JSON.stringify(DEFAULT_NOTIFICATIONS));
    localStorage.setItem('rental_payments', JSON.stringify(DEFAULT_PAYMENTS));
    localStorage.setItem('rental_v2_clean', 'true');
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

// Payments
export function getPayments() {
  initializeData();
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('rental_payments') || '[]');
}

export function updatePaymentStatus(paymentId, status) {
  const payments = getPayments();
  const payment = payments.find(p => p.id === paymentId);
  if (payment) {
    payment.status = status;
    payment.paidDate = status === 'Paid' ? new Date().toISOString().split('T')[0] : null;
    localStorage.setItem('rental_payments', JSON.stringify(payments));
  }
  return payment;
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
  const totalAnnualRevenue = occupiedProperties.reduce((sum, p) => sum + (p.annualRent || 0), 0);
  const monthlyRevenue = Math.round(totalAnnualRevenue / 12);
  const activeRenters = tenants.filter(t => t.status === 'Active').length;
  const pendingSplits = payments.filter(p => p.status === 'Pending').length;
  const overdueSplits = payments.filter(p => p.status === 'Overdue').length;

  // Monthly revenue data for chart (simulated for past 6 months)
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const revenueData = months.map(() => {
    const base = monthlyRevenue;
    const variance = Math.round(base * (0.85 + Math.random() * 0.3));
    return variance;
  });

  // Upcoming payments
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
    totalRevenue: totalAnnualRevenue || 0,
    totalAnnualRevenue: totalAnnualRevenue || 0,
    monthlyRevenue: monthlyRevenue || 0,
    monthlyCashflow: monthlyRevenue || 0,
    activeProperties: occupiedProperties.length,
    rentedUnits: occupiedProperties.length,
    vacantProperties: properties.length - occupiedProperties.length,
    totalProperties: properties.length,
    totalUnits: properties.length,
    occupancyRate: properties.length > 0 ? Math.round((occupiedProperties.length / properties.length) * 100) : 0,
    activeRenters: activeRenters || 0,
    pendingSplits: pendingSplits || 0,
    overdueSplits: overdueSplits || 0,
    overdueCount: overdueSplits || 0,
    months: months || ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    revenueData: revenueData || [0, 0, 0, 0, 0, 0],
    upcomingPayments: upcomingPayments || [],
    upcomingSplits: upcomingPayments || [],
    recentActivity: recentActivity || []
  };
}

// ── Utility Functions ──
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-JO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount || 0) + ' JOD';
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
  if (typeof window === 'undefined') return;
  localStorage.removeItem('rental_v2_clean');
  localStorage.removeItem('rental_initialized');
  localStorage.removeItem('rental_properties');
  localStorage.removeItem('rental_tenants');
  localStorage.removeItem('rental_payments');
  localStorage.removeItem('rental_notifications');
  initializeData();
}
