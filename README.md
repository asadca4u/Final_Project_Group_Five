## Predicting instances of Type II Diabetes with Machine Learning Models

### The Models

### Preprocessing The Data
- First the dataset is separated into the features and the target. There are 15 features and one target, "class" which represents whether or not the person is classified as positive for diabetes. 
- The model is trained by first splitting the full dataset into training and testing subsets using the train_test_split function in the Scikit Learn library.
- These subsets are then scaled using the StandardScaler() function, in order to ensure that the inputs to the model are starndardized for more valid comparisons with other ML models. 
- Each of the four model's respective classifier function is imported and called upon to train the model using the training dataset.
  - LogisticRegression()
  - SVC()
  - DecisionTreeClassifier()
  - RandomForestClassifier()
- Each of the models is then used to make predictions using the testing data.
- This process is repeated for each of the 5 data subsets generated from the full dataset.
  - Male Data
  - Female Data
  - Under 40 Data
  - 40-60 Data
  - Over 60 Data

### Accuracy, Sensitivity and Precision 

### Importance of Features
