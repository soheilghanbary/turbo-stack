import { ModeToggle } from '@/components/common/mode-toggle';
import { Suspense } from 'react';

const getHello = async () => {
  const res = await fetch('http://localhost:5000/api/hello');
  return await res.json();
};

const HelloMessage = async () => {
  const data = await getHello();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default function HomePage() {
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center gap-2">
      <h1 className="font-black text-2xl lg:text-4xl xl:text-5xl">
        Welcome to{' '}
        <span className="inline-block bg-gradient-to-r from-rose-600 via-primary to-blue-500 bg-clip-text text-transparent">
          Turbo Stack
        </span>
      </h1>
      <p className="text-muted-foreground text-xs/6 lg:text-lg">
        The Modern Web Stack
      </p>
      <ModeToggle />
      <hr className="my-4 w-full max-w-xs" />
      <Suspense fallback={<p>Loading ...</p>}>
        <HelloMessage />
      </Suspense>
    </div>
  );
}
