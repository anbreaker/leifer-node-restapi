-- Table: public.tracks
-- DROP TABLE IF EXISTS public.tracks;
CREATE TABLE IF NOT EXISTS public.tracks (
  id SERIAL PRIMARY KEY,
  name text COLLATE pg_catalog."default",
  album text COLLATE pg_catalog."default",
  cover text COLLATE pg_catalog."default",
  artist_name text COLLATE pg_catalog."default",
  artist_nickname text COLLATE pg_catalog."default",
  artist_nationality text COLLATE pg_catalog."default",
  duration_start text COLLATE pg_catalog."default",
  duration_end text COLLATE pg_catalog."default",
  media_id text COLLATE pg_catalog."default",
  "createdAt" date,
  "updatedAt" date
) TABLESPACE pg_default;

ALTER TABLE
  IF EXISTS public.tracks OWNER to postgres;