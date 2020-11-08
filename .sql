CREATE TABLE all_data (
  Age varchar,
  Gender varchar,
  Polyuria varchar,
  Polydipsia varchar,
  sudden_weight_loss varchar,
  weakness varchar,
  Polyphagia varchar,
  Genital_thrush varchar,
  visual_blurring varchar,
  Itching varchar,
  Irritability varchar,
  delayed_healing varchar,
  partial_paresis varchar,
  muscle_stiffness varchar,
  Alopecia varchar,
  Obesity varchar,
  class varchar
);

CREATE TABLE female_data (
  Age varchar,
  Gender varchar,
  Polyuria varchar,
  Polydipsia varchar,
  sudden_weight_loss varchar,
  weakness varchar,
  Polyphagia varchar,
  Genital_thrush varchar,
  visual_blurring varchar,
  Itching varchar,
  Irritability varchar,
  delayed_healing varchar,
  partial_paresis varchar,
  muscle_stiffness varchar,
  Alopecia varchar,
  Obesity varchar,
  class varchar
);

CREATE TABLE male_data (
  Age varchar,
  Gender varchar,
  Polyuria varchar,
  Polydipsia varchar,
  sudden_weight_loss varchar,
  weakness varchar,
  Polyphagia varchar,
  Genital_thrush varchar,
  visual_blurring varchar,
  Itching varchar,
  Irritability varchar,
  delayed_healing varchar,
  partial_paresis varchar,
  muscle_stiffness varchar,
  Alopecia varchar,
  Obesity varchar,
  class varchar
);
);

mode = "append"
jdbc_url="jdbc:postgresql://database-2.c0lvbdcxuj3p.us-east-2.rds.amazonaws.com:5432/Final_Project"
config = {"user":"postgres",
          "password": "Mundu33teba?",
          "driver":"org.postgresql.Driver"}
