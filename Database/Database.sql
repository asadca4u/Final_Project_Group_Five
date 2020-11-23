-- Table: all_data

CREATE TABLE all_data
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    "weakness" bigint,
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
    "class" bigint
);

-- Table: male_data

CREATE TABLE male_data
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    "weakness" bigint,
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
    "class" bigint
)

-- Table: female_data

CREATE TABLE female_data
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    "weakness" bigint,
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
    "class" bigint
);

-- Table: generation_one

CREATE TABLE generation_one
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    "weakness" bigint,
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
    "class" bigint
);

-- Table: generation_two

CREATE TABLE generation_two
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    "weakness" bigint,
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
    "class" bigint
);

-- Table: generation_three

CREATE TABLE generation_three
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden weight loss" bigint,
    "weakness" bigint,
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
    "class" bigint
);

-- Table: novel_user_input

CREATE TABLE novel_user_input
(
    "Age" bigint,
    "Gender" bigint,
    "Polyuria" bigint,
    "Polydipsia" bigint,
    "sudden_weight_loss" bigint,
    "weakness" bigint,
    "Polyphagia" bigint,
    "Genital_thrush" bigint,
    "visual_blurring" bigint,
    "Itching" bigint,
    "Irritability" bigint,
    "delayed_healing" bigint,
    "partial_paresis" bigint,
    "muscle_stiffness" bigint,
    "Alopecia" bigint,
    "Obesity" bigint,
    "class" bigint
);


SELECT (Age, Gender, Polyuria, Polydipsia, sudden_weight_loss, weakness, Polyphagia, Genital_thrush, visual_blurring, Itching, 
    Irritability, delayed_healing, partial_paresis, muscle_stiffness, Alopecia, Obesity, class) FROM novel_user_input
UNION ALL
SELECT (Age, Gender, Polyuria, Polydipsia, sudden_weight_loss, weakness, Polyphagia, Genital_thrush, visual_blurring, Itching, 
    Irritability, delayed_healing, partial_paresis, muscle_stiffness, Alopecia, Obesity, class) FROM all_data;
                     


