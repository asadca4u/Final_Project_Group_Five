## Extract, Transform and Load the Dataset

### Extracting the Dataset:
- The dataset was downloaded as a csv file from the University of California Irvine Machine Learning Repository, and can be seen below: 

![Dataset](https://github.com/asadca4u/Final_Project_Group_Five/blob/ETL/Images/1.png)

- This dataset contains 520 rows and 17 columns:
  - Two of the columns contain demographic information (gender and age). 
  - Fourteen columns contain symptoms associated with Type II diabetes, each of which is encoded in a binary Yes/No.
  - One column contains a classification of positive or negative for Type II diabetes (class).
  
- The CSV file was uploaded to an Amazon S3 bucket for easily avaliable access to the raw dataset. 
- Using pandas, the CSV file was read into a dataframe (shown above), in order to set up for the transformation process. 

### Transforming the Dataset:
- This dataset required minimal processing to ready it for input into machine learning models, it was already encoded in a categorical fashion, and so merely required a conversion of the Yes/No, Positive/Negative and Male/Female strings into integers 1 and 0. 
- This was done using the LabelEncoder module in the SciKitLearn library, which was iterated over each column that required encoding using a for loop. 

![Encoding](https://github.com/asadca4u/Final_Project_Group_Five/blob/ETL/Images/2.png)
                 
- This fully encoded dataset was divided into separate subsets contained in separate dataframes:
  - The gender column was filtered to return two dataframes containing all the male (328 rows) and female (192 rows) data separately. 
  - The age column was filtered to return three dataframes that contained separate generations as follows:
    - Under 40 (144 rows)
    - 40 - 60 (281 rows)
    - Over 60 (95 rows)

### Load the Dataset:
- Finally, the six total dataframes were loaded into a PostgreSQL relational database, which is stored on an AWS server and communicates with the Python code using SQLAlchemy and an associated connection string. This is where the dataset will be stored statically for access later as it is required for the machine learning models. 

![Load](https://github.com/asadca4u/Final_Project_Group_Five/blob/ETL/Images/3.png)
