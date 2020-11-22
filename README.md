# Prediction of Diabetes
Diabetes, a chronic metabolic disorder, is one of the fastest growing diseases regardless of geographic, racial, or ethnic context. There are two types of disbetes: Type I and Type II. 
- Type I diabetes happens when the pancreatic beta cells produce either very little insulin or no insulin.
- Type II dibetes happens when the body becomes insulin resistant.

The common symptoms for Type I diabetes are sudden weight loss, dehydration, delayed healing, blurred vision and Type II have similar symptoms or no symptoms at all depending on each body's idiosyncratic reactions. [1, 2]. Type I diabetes strikes both kids and adults at any age, while Type II diabetes is generally seen later in life. There is no cure for diabetes but it can be managed if it is diagnosed in the early stages. Type I diabetes can be managed by medication such as insulin and Type II can be managed via a balanced diet, excercise and a healthy lifestyle. In this project, we will be dealing exclusively with data about Type II diabetic patients. 

### Why we have chosen "Prediction of Diabetes" as a topic
8.7% of males and 7.6% of females in Canada, equaling roughly three million individuals, had Type II diabetes in the year 2014 [4]. Nationally, in the year 2014, the incidence of new diabetes cases in the population was 5.9 out of every 1000 people [4]. Total health care costs resulting from diabetes in Canada is expected to increase to over $16.9 billion (CAD) anually by 2020. We would like to create a machine learning model that can correlationally predict whether or not an individual is at risk for Type II Diabetes based on a range of health and demographic features, in order to aid clinicians in preventing and treating the illness. 

![Diabetes Canada](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Diabetes%20Incidence%20Canada.png)

### Description of Data
The dataset contains a record of 16 attributes about each of 520 patients, which may be correlated with their diabetic status, or "class". The data is entered as either "Yes" or "No" for each of the 14 health related factors, and is entered as "Positive" or "Negative" in its classification of whether or not the individual patient (represented by a single row) has diabetes.  The data was collected from the patients in the Sylhet Diabetes Hospital of Sylhet, Bangladesh.

![Dataset](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Dataset.png)

### Questions to Consider
To what extent can a machine-learning model predict whether or not a patient is at risk of diabetes based on 16 different health and demographic attributes? Is such a model useful for classifying patients in a clinical setting so that preventative and if nescessary, therapeutic measures may be implemented?


### References:
1. https://www.diabetes.ca/en-CA/about-diabetes
2. https://www.albertadiabetesfoundation.com/type-2-diabetes?gclid=CjwKCAiAqJn9BRB0EiwAJ1SztWQsJPkJ0cSmIA5_mo6FY-YJaOfQ3yL8lVYJY2vqKnNk5ba-Uz8mpRoC2YkQAvD_BwE
3. https://www.jdrf.ca/who-we-are/type-1-diabetes/
4. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/diabetes-canada-highlights-chronic-disease-surveillance-system.html

## Summary of Communication Protocols 
- In this project, we first began by sourcing the dataset from the University of California machine learning repository as a CSV file, which was subsequently hosted in a S3 bucket. 
- AWS RDS was used to host a PostgreSQL database, which would hold the static dataset after it was processed and tranformed for the purposes of our machine learning model. 
- A Google Colab Jupyter Notebook was used to import the dataset from the S3 bucket via the Pandas library, which is where the dataset was cleaned up and encoded using the Scikit Learn library, outputting the labels that will be used as input for our machine learning model. 
- Once the dataset is processed and transformed, a connection was created between the Python code base in the Jupyter Notebook and the PostgreSQL database hosted on the AWS server, using SQLAlchemy.
- This connection was used to push the final processed dataset into the database for static storage, and so that it may be accessed later to train and assess our machine learning models. 

## Extract, Transform and Load
### Extracting the Dataset:
- The dataset was downloaded as a csv file from the University of California Irvine Machine Learning Repository, and can be seen below: 

![Dataset](https://github.com/asadca4u/Final_Project_Group_Five/blob/ETL/Images/ETL1.png)

- This dataset contains 520 rows and 17 columns:
  - Two of the columns contain demographic information (gender and age). 
  - Fourteen columns contain symptoms associated with Type II diabetes, each of which is encoded in a binary Yes/No.
  - One column contains a classification of positive or negative for Type II diabetes (class).
  
- The CSV file was uploaded to an Amazon S3 bucket for easily avaliable access to the raw dataset. 
- Using pandas, the CSV file was read into a dataframe (shown above), in order to set up for the transformation process. 

### Transforming the Dataset:
- This dataset required minimal processing to ready it for input into machine learning models, it was already encoded in a categorical fashion, and so merely required a conversion of the Yes/No, Positive/Negative and Male/Female strings into integers 1 and 0. 
- This was done using the LabelEncoder module in the SciKitLearn library, which was iterated over each column that required encoding using a for loop. 

![Encoding](https://github.com/asadca4u/Final_Project_Group_Five/blob/ETL/Images/ETL2.png)
                 
- This fully encoded dataset was divided into separate subsets contained in separate dataframes:
  - The gender column was filtered to return two dataframes containing all the male (328 rows) and female (192 rows) data separately. 
  - The age column was filtered to return three dataframes that contained separate generations as follows:
    - Under 40 (144 rows)
    - 40 - 60 (281 rows)
    - Over 60 (95 rows)

### Load the Dataset:
- Finally, the six total dataframes were loaded into a PostgreSQL relational database, which is stored on an AWS server and communicates with the Python code using SQLAlchemy and an associated connection string. This is where the dataset will be stored statically for access later as it is required for the machine learning models. 

![Load](https://github.com/asadca4u/Final_Project_Group_Five/blob/ETL/Images/ETL3.png)

## Database

## Machine Learning Models

## Dashboard
