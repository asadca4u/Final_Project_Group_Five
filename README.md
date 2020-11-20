## Predicting instances of Type II Diabetes with Machine Learning and Neural Network

- How does it work?
- Why this specific model?
- What is the model's accuracy?
- If there are statistics involved, what stats are being included in analysis and why?
- If no statistics are involved, what would you include if you had more time?




### Which model did you choose and why?
- As an initial test case, A decision tree model was used in order to predict instances of diabetes in patients, given 15 different features. This model was chosen for its ability to remain easily interpretable, despite the incredible complexity associated with such a high number of features. However, decision trees have a tendency to overfit data, so other models will be used comparitively to detect instances of overfitting. 

### How are you training your model?
- First the dataset is separated into the features and the target. There are 15 features and one target, "class" which represents whether or not the person is classified as positive for diabetes. 
- The model is trained by first splitting the full dataset into training and testing subsets using the train_test_split function in the Scikit Learn library.
- These subsets are then scaled using the StandardScaler() function, in order to ensure that the inputs to the model are starndardized for more valid comparisons with other ML models. 
- The DecisionTreeClassifier() function is then called and used to train the model to a decision tree. 
- This model is then used to make predictions using the testing data. 

### What is the model's accuracy?
- The model's calculated accuracy score is 0.946, which means nearly 95% of the time, when given all 15 features as an input, the decision tree model will classify cases it encounters correctly. 

### How does this model work?
- A decision tree model works by generating a series of conditional statements that sequentially classify objects in either one category or another. 

### Summary of Communication Protocols 
- In this project, we first began by sourcing the dataset from the University of California machine learning repository as a CSV file, which was subsequently hosted in a S3 bucket. 
- AWS RDS was used to host a PostgreSQL database, which would hold the static dataset after it was processed and tranformed for the purposes of our machine learning model. 
- A Google Colab Jupyter Notebook was used to import the dataset from the S3 bucket via the Pandas library, which is where the dataset was cleaned up and encoded using the Scikit Learn library, outputting the labels that will be used as input for our machine learning model. 
- Once the dataset is processed and transformed, a connection was created between the Python code base in the Jupyter Notebook and the PostgreSQL database hosted on the AWS server, using SQLAlchemy.
- This connection was used to push the final processed dataset into the database for static storage, and so that it may be accessed later to train and assess our machine learning models. 
