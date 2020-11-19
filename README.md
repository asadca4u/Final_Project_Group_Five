# Prediction of Diabetes
Diabetes, a chronic metabolic disorder, is one of the fastest growing diseases regardless of geographic, racial, or ethnic context. There are two types of disbetes: Type I and Type II. 

- Type I diabetes happens when the pancreatic beta cells produce either very little insulin or no insulin.
- Type II dibetes happens when body become insulin resistance.

The common symptoms for Type I diabetes are sudden weight loss, Dehydration, delayed healing, blurred vision and Type II have similar symptoms or no symptoms at all depends on body reaction. [1, 2]. Type I diabetes strikes both kids and adults at any age.There is no cure for Diabetes but it can be managed if it diagnose in early stage. Type I diabetes can be managed by medication and Type II can be managed by balanced diet, excercise and a healthy lifestyle. In this project, we will be dealing exclusively with data about Type II diabetic patients. 

## Why we have chosen "Prediction of Diabetes" as a topic

8.7% of males and 7.6% of females in Canada, equaling roughly three million individuals, had Type II diabetes in the year 2014 [4]. Nationally, in the year 2014, the incidence of new diabetes cases in the population was 5.9 out of every 1000 people [4]. Total health care costs resulting from diabetes in Canada is expected to increase to over $16.9 billion (CAD) anually by 2020. We would like to create a machine learning model that can correlationally predict whether or not an individual is at risk for Type II Diabetes based on a range of health features, in order to aid clinicians in preventing and treating the illness. 

![Diabetes Canada](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Diabetes%20Incidence%20Canada.png)

## Description of Data

The dataset contains a record of 16 attributes about each of 520 patients, which may be correlated with their diabetic status, or "class". The data was collected from the patients in the Sylhet Diabetes Hospital of Sylhet, Bangladesh.


![Table 1](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Table%201.PNG)

![Table 2](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Table%202.PNG)

## Questions to Consider

To what extent can a machine-learning model predict whether or not a patient is at risk of diabetes based on 16 different health and demographic attributes? Is such a model useful for classifying patients in a clinical setting so that preventative and if nescessary, therapeutic measures may be implemented?


## References:
1. https://www.diabetes.ca/en-CA/about-diabetes
2. https://www.albertadiabetesfoundation.com/type-2-diabetes?gclid=CjwKCAiAqJn9BRB0EiwAJ1SztWQsJPkJ0cSmIA5_mo6FY-YJaOfQ3yL8lVYJY2vqKnNk5ba-Uz8mpRoC2YkQAvD_BwE
3. https://www.jdrf.ca/who-we-are/type-1-diabetes/
4. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/diabetes-canada-highlights-chronic-disease-surveillance-system.html


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

### Summary of Communication Protocols 
- In this project, we first began by sourcing the dataset from the University of California machine learning repository as a CSV file, which was subsequently hosted in a S3 bucket. 
- AWS RDS was used to host a PostgreSQL database, which would hold the static dataset after it was processed and tranformed for the purposes of our machine learning model. 
- A Google Colab Jupyter Notebook was used to import the dataset from the S3 bucket via the Pandas library, which is where the dataset was cleaned up and encoded using the Scikit Learn library, outputting the labels that will be used as input for our machine learning model. 
- Once the dataset is processed and transformed, a connection was created between the Python code base in the Jupyter Notebook and the PostgreSQL database hosted on the AWS server, using SQLAlchemy.
- This connection was used to push the final processed dataset into the database for static storage, and so that it may be accessed later to train and assess our machine learning models. 
