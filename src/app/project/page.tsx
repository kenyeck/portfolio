import { Suspense } from 'react';
import Project from '@/components/project/Project';

export default function Page() {
  return (
    <Suspense>
      <Project />
    </Suspense>
  );
}
