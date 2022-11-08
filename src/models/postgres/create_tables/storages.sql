-- Table: public.storages
-- DROP TABLE IF EXISTS public.storages;
CREATE TABLE IF NOT EXISTS public.storages (
  id SERIAL PRIMARY KEY,
  url text COLLATE pg_catalog."default",
  filename text COLLATE pg_catalog."default",
  "createdAt" date,
  "updatedAt" date
) TABLESPACE pg_default;

ALTER TABLE
  IF EXISTS public.storages OWNER to postgres;