# Machine Learning Model to Predict instances of Type II Diabetes 

### Summary of Communication Protocols 
- In this project, we first began by sourcing the dataset from the University of California machine learning repository as a CSV file, which was subsequently hosted in a S3 bucket. 
- AWS RDS was used to host a PostgreSQL database, which would hold the static dataset after it was processed and tranformed for the purposes of our machine learning model. 
- A Google Colab Jupyter Notebook was used to import the dataset from the S3 bucket via the Pandas library, which is where the dataset was cleaned up and encoded using the Scikit Learn library, outputting the labels that will be used as input for our machine learning model. 
- Once the dataset is processed and transformed, a connection was created between the Python code base in the Jupyter Notebook and the PostgreSQL database hosted on the AWS server, using SQLAlchemy.
- This connection was used to push the final processed dataset into the database for static storage, and so that it may be accessed later to train and assess our machine learning models. 
