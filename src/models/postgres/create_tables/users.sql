-- Table: public.users
-- DROP TABLE IF EXISTS public.users;
CREATE TYPE role_t AS ENUM ('user', 'admin');

CREATE TABLE IF NOT EXISTS public.users (
  id character(20) COLLATE pg_catalog."default",
  name character(20) COLLATE pg_catalog."default",
  email character(50) COLLATE pg_catalog."default",
  passwrod character(150) COLLATE pg_catalog."default",
  role role_t,
  age numeric,
  "createAt" date,
  "updateAt" date
) TABLESPACE pg_default;

ALTER TABLE
  IF EXISTS public.users OWNER to postgres;