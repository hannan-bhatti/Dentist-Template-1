import { Suspense } from 'react';
import { BookingClientWrapper } from './BookingClientWrapper';

function BookingLoading() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: '1.1rem' }}>
      <p>Loading Aura Sanctuary Concierge...</p>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingLoading />}>
      <BookingClientWrapper />
    </Suspense>
  );
}
