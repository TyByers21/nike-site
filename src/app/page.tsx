import Image from "next/image";
import Link from "next/link";
import { db } from "@/db";
import { products } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <div className="flex flex-1 flex-col items-center gap-12 p-8">
      <header className="flex w-full max-w-6xl items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Nike</h1>
        <div className="flex gap-3">
          <Link
            href="/sign-in"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <section className="w-full max-w-6xl">
        <h2 className="mb-6 text-2xl font-semibold">Featured Products</h2>

        {allProducts.length === 0 ? (
          <p className="text-zinc-500">
            No products yet. Run{" "}
            <code className="rounded bg-zinc-100 px-2 py-0.5 text-sm dark:bg-zinc-800">
              npm run db:seed
            </code>{" "}
            to add sample items.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {product.category}
                  </p>
                  <h3 className="font-semibold leading-snug">{product.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {product.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold">
                      ${product.price}
                    </span>
                    {!product.inStock && (
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
