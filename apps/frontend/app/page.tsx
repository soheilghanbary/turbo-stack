import { ModeToggle } from '@/components/common/mode-toggle';
import { Suspense } from 'react';

export const revalidate = 0;

const getHello = async () => {
  const res = await fetch('http://localhost:5000/api/hello');
  const data = await res.json();
  return data;
};

const HelloMessage = async () => {
  const data = await getHello();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default function HomePage() {
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center gap-2">
      <h1 className="font-black text-2xl lg:text-4xl">
        Welcome to <span className="text-blue-500">Rock</span>{' '}
        <span className="text-teal-500">Stack</span>
      </h1>
      <p className="text-muted-foreground text-xs/6 lg:text-lg">
        The Modern Web Stack
      </p>
      <ModeToggle />
      <Suspense fallback={<p>Loading ...</p>}>
        <HelloMessage />
      </Suspense>
    </div>
  );
}
