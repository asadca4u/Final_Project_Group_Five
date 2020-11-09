## Machine Learning Model Blueprint

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

