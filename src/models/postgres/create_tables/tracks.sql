-- Table: public.tracks
-- DROP TABLE IF EXISTS public.tracks;
CREATE TABLE IF NOT EXISTS public.tracks (
  id character(20) COLLATE pg_catalog."default",
  name character(20) COLLATE pg_catalog."default",
  album character(50) COLLATE pg_catalog."default",
  cover character(50) COLLATE pg_catalog."default",
  artist_name character(50) COLLATE pg_catalog."default",
  artist_nickname character(50) COLLATE pg_catalog."default",
  artist_nationality character(50) COLLATE pg_catalog."default",
  duration_start character(50) COLLATE pg_catalog."default",
  duration_end character(50) COLLATE pg_catalog."default",
  mediaId character(50) COLLATE pg_catalog."default",
  "createAt" date,
  "updateAt" date
) TABLESPACE pg_default;

ALTER TABLE
  IF EXISTS public.tracks OWNER to postgres;