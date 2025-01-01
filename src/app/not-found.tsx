'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.replace('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      {loading && <p>Page not found. Redirecting to homepage...</p>}
    </div>
  );
};

export default NotFoundPage;
