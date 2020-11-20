## Predicting instances of Type II Diabetes with Machine Learning Models
- Four different machine learning models are compared here in their ability to correctly classify instances of Type II Diabetes, based on 14 symptoms and 2 demographic identifiers as input features.  

### The Models
#### Logistic Regression

#### SVM

#### Decision Tree

#### Random Forest

### Preprocessing The Data
- First the datasets are imported as dataframes from the PostgreSQL database using the pandas.read_sql_table() function, using SQLAlchemy to make the connection between the database, which is stored on an AWS RDS server, and the Python application, which is hosted on a Google Colab notebook. 
- Next the dataset is separated into the features and the target. There are 16 features and one target, "class" which represents whether or not the person is classified as positive for diabetes. 
- The model is trained by first splitting the full dataset into training and testing subsets using the train_test_split function in the Scikit Learn library.
- These subsets are then scaled using the StandardScaler() function, in order to ensure that the inputs to the model are starndardized for more valid comparisons with other ML models. 
- Each model's respective classifier function is imported and called upon to train the model using the scaled training dataset.
  - LogisticRegression()
  - SVC()
  - DecisionTreeClassifier()
  - RandomForestClassifier()
- Each of the models is then used to make predictions using the scaled testing data.
- This process is repeated for each of the 5 data subsets generated from the full dataset. For the male and female datasets, the gender column was removed as a feature, as this column would contain all the same values. 
  - Male Data
  - Female Data
  - Under 40 Data
  - 40-60 Data
  - Over 60 Data
- Finally, A confusion matrix, accuracy score and classification report are generated for each model's six datasets, including the five subsets listed above. 
- For the Decision Tree Model and the Random Forest Model, importance of feature reports were also generated. 

### Accuracy, Sensitivity and Precision 

### Importance of Features
