-- Table: public.all_data

-- DROP TABLE public.all_data;

CREATE TABLE public.all_data
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    weakness bigint,
    "Polyphagia" bigint,
    "Genital thrush" bigint,
    "visual blurring" bigint,
    "Itching" bigint,
    "Irritability" bigint,
    "delayed healing" bigint,
    "partial paresis" bigint,
    "muscle stiffness" bigint,
    "Alopecia" bigint,
    "Obesity" bigint,
    class bigint
)

TABLESPACE pg_default;

ALTER TABLE public.all_data
    OWNER to postgres;
    
-- Table: public.diabetes_data_upload

-- DROP TABLE public.diabetes_data_upload;

CREATE TABLE public.diabetes_data_upload
(
    age character varying COLLATE pg_catalog."default",
    gender character varying COLLATE pg_catalog."default",
    polyuria character varying COLLATE pg_catalog."default",
    polydipsia character varying COLLATE pg_catalog."default",
    sudden_weight_loss character varying COLLATE pg_catalog."default",
    weakness character varying COLLATE pg_catalog."default",
    polyphagia character varying COLLATE pg_catalog."default",
    genital_thrush character varying COLLATE pg_catalog."default",
    visual_blurring character varying COLLATE pg_catalog."default",
    itching character varying COLLATE pg_catalog."default",
    irritability character varying COLLATE pg_catalog."default",
    delayed_healing character varying COLLATE pg_catalog."default",
    partial_paresis character varying COLLATE pg_catalog."default",
    muscle_stiffness character varying COLLATE pg_catalog."default",
    alopecia character varying COLLATE pg_catalog."default",
    obesity character varying COLLATE pg_catalog."default",
    class character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.diabetes_data_upload
    OWNER to postgres;

-- Table: public.female_data

-- DROP TABLE public.female_data;

CREATE TABLE public.female_data
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    weakness bigint,
    "Polyphagia" bigint,
    "Genital thrush" bigint,
    "visual blurring" bigint,
    "Itching" bigint,
    "Irritability" bigint,
    "delayed healing" bigint,
    "partial paresis" bigint,
    "muscle stiffness" bigint,
    "Alopecia" bigint,
    "Obesity" bigint,
    class bigint
)

TABLESPACE pg_default;

ALTER TABLE public.female_data
    OWNER to postgres;

-- Table: public.generation_one

-- DROP TABLE public.generation_one;

CREATE TABLE public.generation_one
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    weakness bigint,
    "Polyphagia" bigint,
    "Genital thrush" bigint,
    "visual blurring" bigint,
    "Itching" bigint,
    "Irritability" bigint,
    "delayed healing" bigint,
    "partial paresis" bigint,
    "muscle stiffness" bigint,
    "Alopecia" bigint,
    "Obesity" bigint,
    class bigint
)

TABLESPACE pg_default;

ALTER TABLE public.generation_one
    OWNER to postgres;

-- Table: public.generation_three

-- DROP TABLE public.generation_three;

CREATE TABLE public.generation_three
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    weakness bigint,
    "Polyphagia" bigint,
    "Genital thrush" bigint,
    "visual blurring" bigint,
    "Itching" bigint,
    "Irritability" bigint,
    "delayed healing" bigint,
    "partial paresis" bigint,
    "muscle stiffness" bigint,
    "Alopecia" bigint,
    "Obesity" bigint,
    class bigint
)

TABLESPACE pg_default;

ALTER TABLE public.generation_three
    OWNER to postgres;

-- Table: public.generation_two

-- DROP TABLE public.generation_two;

CREATE TABLE public.generation_two
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    weakness bigint,
    "Polyphagia" bigint,
    "Genital thrush" bigint,
    "visual blurring" bigint,
    "Itching" bigint,
    "Irritability" bigint,
    "delayed healing" bigint,
    "partial paresis" bigint,
    "muscle stiffness" bigint,
    "Alopecia" bigint,
    "Obesity" bigint,
    class bigint
)

TABLESPACE pg_default;

ALTER TABLE public.generation_two
    OWNER to postgres;
-- Table: public.male_data

-- DROP TABLE public.male_data;

CREATE TABLE public.male_data
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    weakness bigint,
    "Polyphagia" bigint,
    "Genital thrush" bigint,
    "visual blurring" bigint,
    "Itching" bigint,
    "Irritability" bigint,
    "delayed healing" bigint,
    "partial paresis" bigint,
    "muscle stiffness" bigint,
    "Alopecia" bigint,
    "Obesity" bigint,
    class bigint
)

TABLESPACE pg_default;

ALTER TABLE public.male_data
    OWNER to postgres;                    


