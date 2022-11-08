-- Table: public.users
-- DROP TABLE IF EXISTS public.users;
CREATE TYPE role_t AS ENUM ('user', 'admin');

CREATE TABLE IF NOT EXISTS public.users (
  id SERIAL PRIMARY KEY,
  name text COLLATE pg_catalog."default",
  email text COLLATE pg_catalog."default",
  password text COLLATE pg_catalog."default",
  role role_t,
  age numeric,
  "createdAt" date,
  "updatedAt" date
) TABLESPACE pg_default;

ALTER TABLE
  IF EXISTS public.users OWNER to postgres;