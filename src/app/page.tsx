import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Nike Site</h1>
      <p className="max-w-md text-center text-lg text-zinc-600 dark:text-zinc-400">
        Built with Next.js, TypeScript, Tailwind CSS, Better Auth, Neon
        PostgreSQL, Drizzle ORM, and Zustand.
      </p>
      <div className="flex gap-4">
        <Link
          href="/sign-in"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
