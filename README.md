## Predicting instances of Type II Diabetes with Machine Learning Models
Four different machine learning models are compared here in their ability to correctly classify instances of Type II Diabetes, based on 14 symptoms and 2 demographic identifiers as input features.  

### The Models
#### Logistic Regression
  A logistic regression makes predictions about binary outcomes, that is, whether or not a data point belongs in one of two categories, when compared to the rest of the dataset. The regression mathematically determines the probability that a novel data point belongs in a certain class, if the probability is above a certain threshold, then the sample is assigned to that class, otherwise it is assigned to the other class in the binary. In this project, we are attempting to classify individuals based on thier risk for Type II Diabetes, that is, they are either at risk or not at risk, and so a logistic regression model is ideal.

#### SVM
  Support Vector Machines are also binary classifiers, much like logistic regressions, however unlike the sigmoid curve used in the logistic regression, the SVM is a linear classifier. As such, it generates a straight line that separates the two classes of data points and attempts to ensure that the line is as equally distant from the two subsets as possible. Support Vectors are the data points that are closest to the straight line that divides the subsets, these data points serve as decision boundaries for classification. 

#### Decision Tree
  Decision trees are structures that encode a series of true/false questions, which are themselves represented by a series of if/else statements. Observations about the individuals are used to form conclusions about where they ought to be classified. The answer to each true/false question will cumulate so that the ability of the tree to form an accurate conclusion increases. In this project, the answer to whether or not a person is at risk for Type II diabetes is rooted in the answers to the health symptom questions, which were presented to each patient as true/false statements. These answers are entered into the decision tree sequentially, until a conclusion is reached that classifies the individual patient as either at risk or not at risk. 

#### Random Forest
  Random forest is a form of ensemble learing, which combines multiple models, such as decision tree algorithms, to help increase the robustness, and decrease the variance of the model. Multiple algorithms independently learn from and make predictions about the dataset, with the final prediction of the entire model being based on accumulated predictions from each of the individual algorithms. These individual algorithms are considered weak learners, that on their own have very little predictive power, but when combined in multiples, can produce a very high predictive power. Random Forests in particular, combine many smaller decision trees which are individually built from a random subset of the whole set of features. In this project's case, each decision tree would take a randomly selected subset of symptoms and attempt to classify individual patients based on just that subset. A radom forest model works best with a large set of features as input, due to the wide variety of weak learners it can generate, the cumulative predictive power increases with the possible combinations of features. Random forest models are also highly robust against overfitting, as they apporach the classification problem from as many possible angles as possible, figuratively speaking, since each individual decision tree is trained on a different subset of data. This also allows us to easily gague the relative importance of each feature in predicting whether or not an individual should be classified as at risk or not at risk for Type II diabetes. 

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

### Analysis of ML Models
#### Accuracy
The Accuracy score of a model is a measure of how many of its classification predictions were in fact correct. This is calculated by taking the ratio of correct classification predictions to total classification predictions attempted. That is, the amount of True Negative predictions and True Positive predictions divided by total amount of predictions. In this project, the accuracy score represents the degree to which the machine learning model is able to correctly classify patients as at risk or not at risk for diabetes based on the portion of the dataset separated out for testing, rather than training. This score is an indication of how well we ought to expect the individual models to classify novel data points.
- According to the figure below, and as expected, the random forest model has the highest mean accuracy score across all six data subsets, with the score never dropping below 0.958. This means that we ought to expect the random forest model to correctly classify any given patient atleast 95% of the time. 
- The only data subset that the random forest model struggled with, was the set of patients with ages over 60, which both the logistic regression and SVM models were able to classify correctly 100% of the time. Although this anomaly probably has to do with the smaller data subset avaliable for patients over 60, with only 95 entries in the dataset.

![Accuracy](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Accuracy.png)

#### Precision 

![Precision](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Precision.png)

#### Sensitivity

![Sensitivity](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Sensitivity.png)

### Importance of Features

![Importance_1](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Feature%20Importance%201.png)

![Importance 2](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Feature%20Importance%202.png)
