-- Step 5: Supabase schema for the contact form (built in step 6).
--
-- How to run this:
--   Option A (Supabase CLI): `npx supabase db push` after `npx supabase link`.
--   Option B (Dashboard):    paste this file into the SQL Editor and run it.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  country text not null,
  message text not null,
  locale text not null default 'en',
  status text not null default 'new' check (status in ('new', 'read', 'archived'))
);

comment on table public.contact_messages is
  'Submissions from the public contact form. Insert-only from the client; read/managed by Lisa via the Supabase dashboard.';

-- Row Level Security: the anon/publishable key may INSERT (submit the form)
-- but can never SELECT, UPDATE, or DELETE — so a submitted message can't be
-- read back by the public, only by an authenticated dashboard user or a
-- secret-key-authenticated backend process.
alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit the contact form" on public.contact_messages;
create policy "Anyone can submit the contact form"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

-- Basic spam/abuse guardrails at the database level, as a second line of
-- defense behind the Zod validation in the Server Action (step 6).
alter table public.contact_messages
  add constraint contact_messages_name_length check (char_length(name) between 1 and 100),
  add constraint contact_messages_message_length check (char_length(message) between 1 and 2000),
  add constraint contact_messages_email_format check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$');

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);
