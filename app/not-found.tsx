'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const currentPath = usePathname();

  return (
    <section className="h-auto md:min-h-[70vh] lg:min-h-[80vh] flex flex-col items-center justify-center text-center p-6 mt-12 md:mt-0">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold leading-tight mb-2">
          Oops!{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            404
          </span>
        </h1>
        <p className="text-lg text-gray-400 mb-4 max-w-md">
          The URL path &quot;
          <span className="text-gray-300 font-bold">{currentPath}</span>&quot;
          does not exist. This portfolio currently contains only a homepage.
        </p>

        <div className="flex gap-4">
          <Link href="/" passHref>
            <button className="button-primary px-4 py-2 rounded-lg">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
