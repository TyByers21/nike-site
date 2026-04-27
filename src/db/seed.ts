import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";

const sampleProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
    price: "130.00",
    category: "Shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx3bianbo1/W+AIR+MAX+90.png",
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07. This b-ball icon puts a fresh spin on what you know best.",
    price: "115.00",
    category: "Shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998a18de3/AIR+FORCE+1+%2707.png",
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: "115.00",
    category: "Shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcb4e4-e6d0-4a32-8ba0-2018fba4cadc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    name: "Nike Sportswear Tech Fleece Joggers",
    description:
      "Slim-fitting joggers made with lightweight Nike Tech Fleece fabric for an elevated everyday look.",
    price: "110.00",
    category: "Clothing",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aafc79d0-68b5-42e1-85ff-d12f75a2f59f/M+NK+TCH+FLC+JGGR.png",
  },
  {
    name: "Nike Sportswear Club Fleece Hoodie",
    description:
      "The Nike Sportswear Club Fleece Hoodie combines classic style with the soft comfort of fleece.",
    price: "65.00",
    category: "Clothing",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a476f9c-7483-4275-9aba-a4540a498898/M+NK+CLUB+BB+PO+HOODIE.png",
  },
  {
    name: "Nike Brasilia 9.5 Backpack",
    description:
      "The Nike Brasilia Backpack is built with durable fabric and plenty of pockets to help you stay organized.",
    price: "45.00",
    category: "Accessories",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e15d225f-71c4-4f7c-a289-b21c0e3b377f/BRSLA+M+BKPK+-+9.5+%2824L%29.png",
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive cushioning in the Pegasus provides an energized ride for everyday road running.",
    price: "140.00",
    category: "Shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a0a287-e983-4c66-967e-e0c6c1d6a95c/W+AIR+ZOOM+PEGASUS+41.png",
  },
  {
    name: "Nike Pro Dri-FIT T-Shirt",
    description:
      "The Nike Pro Dri-FIT T-Shirt delivers a snug feel with sweat-wicking technology to keep you cool during workouts.",
    price: "35.00",
    category: "Clothing",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed7f251d-48fe-4bfe-886e-e0ed110c72f8/M+NP+DF+TIGHT+TOP+SS.png",
  },
];

async function seed() {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle({ client: sql });

  console.log("Seeding products...");

  await db.insert(products).values(sampleProducts);

  console.log(`Seeded ${sampleProducts.length} products.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
