# Nike Site

A full-stack web application built with modern technologies.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **Database**: [Neon PostgreSQL](https://neon.tech/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

## Getting Started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech/) PostgreSQL database

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/TyByers21/nike-site.git
   cd nike-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the environment variables file and fill in your values:

   ```bash
   cp .env.example .env
   ```

   Required environment variables:

   - `DATABASE_URL` - Your Neon PostgreSQL connection string
   - `BETTER_AUTH_SECRET` - A random secret for Better Auth (generate with `openssl rand -base64 32`)
   - `BETTER_AUTH_URL` - Your app URL (default: `http://localhost:3000`)

4. Push the database schema:

   ```bash
   npm run db:push
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Commands

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm run db:generate` | Generate Drizzle migrations     |
| `npm run db:migrate`  | Run Drizzle migrations          |
| `npm run db:push`     | Push schema directly to database |
| `npm run db:studio`   | Open Drizzle Studio              |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/auth/[...all]/  # Better Auth API route
│   ├── dashboard/          # Protected dashboard page
│   ├── sign-in/            # Sign in page
│   ├── sign-up/            # Sign up page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── db/                     # Database layer
│   ├── index.ts            # Drizzle client
│   └── schema.ts           # Drizzle schema (Better Auth tables)
├── lib/                    # Shared utilities
│   ├── auth.ts             # Better Auth server config
│   └── auth-client.ts      # Better Auth client
└── store/                  # Zustand stores
    └── index.ts            # App store
```
