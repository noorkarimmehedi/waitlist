# Waitlist Application

A simple waitlist application built with Next.js and Supabase.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Replace `your_supabase_project_url` and `your_supabase_anon_key` with your actual Supabase project credentials.

3. Run the development server:
   ```bash
   npm run dev
   ```

## Supabase Setup

1. Create a new table in your Supabase project with the following SQL:
   ```sql
   create table waitlist (
     id uuid default uuid_generate_v4() primary key,
     email text not null unique,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );
   ```

2. Set up Row Level Security (RLS) policies:
   ```sql
   -- Enable RLS
   alter table waitlist enable row level security;

   -- Allow public read access to the waitlist count
   create policy "Public waitlist count" on waitlist
     for select using (true);

   -- Allow public insert access to the waitlist
   create policy "Public waitlist insert" on waitlist
     for insert with check (true);
   ```

## Development

- Run the development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous/public API key