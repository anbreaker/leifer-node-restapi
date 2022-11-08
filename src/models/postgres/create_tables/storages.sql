-- Table: public.storages
-- DROP TABLE IF EXISTS public.storages;
CREATE TABLE IF NOT EXISTS public.storages (
  id character(20) COLLATE pg_catalog."default",
  url character(100) COLLATE pg_catalog."default",
  filename character(50) COLLATE pg_catalog."default",
  "createAt" date,
  "updateAt" date
) TABLESPACE pg_default;

ALTER TABLE
  IF EXISTS public.storages OWNER to postgres;