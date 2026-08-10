export default function manifest() {
  return {
    name: 'Khaled Rentals - Executive Management',
    short_name: 'KhaledRentals',
    description: 'Executive Property Rental & Payment Splits Management App for Khaled',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0c0d10',
    theme_color: '#e2c992',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
