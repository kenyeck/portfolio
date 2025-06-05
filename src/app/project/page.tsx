import { Suspense } from 'react';
import Project from '@/components/Project';

export default function Page() {
  return (
    <Suspense>
      <Project />
    </Suspense>
  );
}
