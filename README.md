[Access our Dashboard](https://asadca4u.github.io/Final_Project_Group_Five/)

[Access our Presentation](https://docs.google.com/presentation/d/1dsuO6mXq4usG-t-wahd12MQy8CVVl8-gE_ZYVzrfZTk/edit?usp=sharing)

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

### Loading the Dataset:
- Finally, the six total dataframes were loaded into a PostgreSQL relational database, which is stored on an AWS server and communicates with the Python code using SQLAlchemy and an associated connection string. This is where the dataset will be stored statically for access later as it is required for the machine learning models. 

![Load](https://github.com/asadca4u/Final_Project_Group_Five/blob/ETL/Images/ETL3.png)

## Database
The database is a relational database created using PostgreSQL, and hosted on Amazon Web Services (AWS). The database currently contains seven tables, as can be seen in the entity relation diagram (ERD). This database stores the static data that has been preprocessed and will be used as input for the machine learning models, it connects to the python code hosted in a Google Colab notebook using SQLAlchemy with a connection string thats leads to the specific AWS server, as can be seen in the ETL portion and summary of communication protocols. The database will also connect to the dashboard, whereby users input data on the dashboard, which is processed and pushed back the database. This novel user data can be used as input for the final machine learning model, in order to make predictions about the individual's diabetic status. The rows entered into the novel_user_input table are added to the all_data table using the SQL UNION function. 

![ERD](https://github.com/asadca4u/Final_Project_Group_Five/blob/Database/Images/ERD.png)

## Machine Learning Models
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
Precision, also known as positive predictive value (PPV), is a measure of how reliable a positive classification is. It is calculated by taking the ratio of correct positive classifications to all positive classifications. That is, the amount of True Positive predictions divided by the total amount of Positive predictions (True Positive + False Positive). In this project, the PPV represents the degree to which the machine learning model is reliably able to classify patients who are actually at risk of diabetes, as at risk in its predictions. In this context, The more precise a machine learning model, the more likely it is to correctly calssify at risk patients. 
- In the figure below, precision follows a similar pattern to accuracy scores discussed previously, in that the random forest model has the greatest mean precision, only really falling short in the over 60 category, in which logistic regression and SVM models have the best performance. 
- As a result, we can conclude that based on the current dataset, the random forest model will most reliably classify patients who are actually at risk for diabetes, as at risk in its predictions. 

![Precision](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Precision.png)

#### Sensitivity
Sensitivity, also known as recall, is a measure of how many instances of a positive classification were actually correctly classified as positive. This is calculated by taking the ratio of correct positive classifications to the total amount of actual positives. That is, the amount of True Positive predictions divided by the sum of actual positives (True Positive + False Negative). In this project, the recall represents the liklihood that the model will accurately classify those individuals who actually have diabetes, as having diabetes. That is, sensitivity is a measure of how many people who actually had diabetes, were correctly diagnosed. 
- In the figure below, once again we see that the random forest model has the highest mean sensitivity, as well as having the lowest variance across groups. 

![Sensitivity](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Sensitivity.png)


Within the context of our project, which seeks to generate a preliminary diagnosis for Type II diabetes, by classifying an individual as either at risk, or not at risk, based on a set of 16 features, sensitivity is the most important metric to consider. Since this is merely a preliminary screening tool, not something designed to replace the expertise and experience of clinicians, it is paramount that the model classify as many individuals who actually have diabetes, as being at risk for diabetes, so that further screening may take place for a final diagnosis. If the sensitivity is low, it may actually turn away patients who may in fact be at risk for diabetes, by giving them a classification of not at risk, ultimately proving to be counter productive to its intended purpose. Accuracy and precision are also important metrics to consider, since a low accuracy indicates a poorly functioning classifier and low precision indicates the model's unreliability in its positive classifications. However, within the context of our application, and its intended use, sensitivity is the most important metric to consider when selecting a machine learning model.

### Importance of Features
Having recognized the random forest algorithm as the best performing model in this project, with the added benefit that it is robust against overfitting, unlike the decision tree algorithm, it can be chosen as the model we use to produce our calssification application. Random Forest also allows us to measure the importance of features, which is a relative measure of how much a given feature contributes to the final random forest model, in relation to the other input features. 
- Polyuria is a condition where the body urinates more than usual and passes excessive or abnormally large amounts of urine each time you urinate. [5]
- Polydipsia is a condition involving excessive thirst and is one of the initial symptoms of diabetes. It is also usually accompanied by temporary or prolonged dryness of the mouth. [5]
- Alopecia is a condition that causes hair to fall out in small patches, which can be unnoticeable. The condition develops when the immune system attacks the hair follicles, resulting in hair loss.[5]
- Polyphagia, also known as hyperphagia, is the medical term for excessive and persisting hunger. It differs from having an increased appetite as a result of physical exertion; while  hunger levels will return to normal after eating in those cases, polyphagia remains no matter how much food is consumed. [5]

The importance of features is relatively consistent across groups, with Polyuria and Polydipsia being the top two in all groups except female only and over 60. Interestingly enough, the age of the patient and the presence of alopecia are more significant contributors to an accurate classification amongst female patients, while alopecia is a very minor predictor of male diabetic status, and age is still the third most important feature in predicting diabetes amongst men. In the over 60 category, polydipsia remains an important factor, while itching and delayed healing become important in the oldest generation. Overall, we have revealed is a clear distinction between the features that are most important to male and female patients when diagnosing diabetes, while also discovering a clear change in the symptoms that become most important with a progression in age. 

![Importance_1](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Feature%20Importance%201.png)

![Importance 2](https://github.com/asadca4u/Final_Project_Group_Five/blob/ML_Models/Images/Feature%20Importance%202.png)

[5] https://www.diabetes.co.uk/category/diagnosis/symptoms/

## Dashboard
The dashboard is a place to display the results of the analysis and to provide a place for the user to interact with the data. Since we are attempting to build an application that predicts instances of diabetes, the dashboard will provide the user with input fields to answer yes or no questions about the 16 different features. This data will be pushed to the database, where it can be accessed by the machine learning model. The machine learing model returns a prediction, based on the 16 factors, as to whether the individual is at risk or not at risk for diabetes. This is pushed back into the dashboard, where there are multiple graphs depicting where their data point stands in relation to all the other samples. 

- Input takes data from user and adds it to the database as a new row in a User_Input table
- This user input is run through the most accurate ML model, and returns a classification of at risk or not at risk
    1. HTML form with JS application
        - JS function extracts data from the HTML form and organizes it into a JS object using an object constructor function
        - JS object is converted to JSON and stored in a variable, using JSON.stringify()
    2.  AWS pipeline 
        - Part A: Dashboard to S3 Bucket
            - S3 Bucket and associated access point are created, and their Cross-origin resource sharing (CORS) is configured in order to define the manner in which the client web application will interact with the AWS server. 
            - Using AWS SDK for JavaScript in Browsers, a connection was created through the S3 access point, the SDK itself is imported via a script tag in the HTML code.
            - This connection was leveraged to upload the JSON data to the S3 bucket, overwriting the file each time a new form is submitted. 
            - In order to allow the communication to occur through the access point, the Amazon Cognito service was configured to create a new identity pool, which allows the script in the browser to obtain AWS access credentials.
            - These access credentials were obtained using the Amazon IAM service, which provides an AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, which are then stored as environmental variables for access by the SDK. 
        - Part B: S3 Bucket to PostgreSQL database
            - Using AWS Lambda, a lambda function was created that is triggered by the user input data being updated on the S3 bucket, as a result of the HTML form being submitted. 
            - This lambda function was coupled with 2 layers, one was the AWSLambda-Python36-SciPy1x layer provided by AWS, and the second was a custom layer containing relevant dependencies like pandas, psycopg2, SQLAlchemy and s3fs. 
            - The custom layer was created using an AWS Cloud9 Linux environment, in which a virtual environment was created, and all the relevant dependencies installed. This was zipped up and exported to AWS Lambda as a custom layer. 
            - The Lambda function itself is a simple script that imports the JSON data, which was exported by the client side to the S3 bucket, as a pandas dataframe. It then creates an SQLAlchemy connection with the project database, and exports the dataframe to the PostgreSQL database. 
            - All of this is rigged to occur automatically the moment the ‘Submit’ button is clicked in the HTML form. 
        - Part C: PostgreSQL database to ML-Model
            - A second AWS Lambda function was created to extract the user input data from the database and pass it through a Random Forest model to return a prediction. 
            - The lambda function uses SQL Alchemy in order to connect to the PostgreSQL database, where the data was uploaded from the previous Lambda Function. This data is passed through the Random Forest model, which is trained on the entire set of data held in the table all_data in the database. 
            - The model returns a prediction based on the sixteen features that were provided by the user in the HTML form, this prediction, as well as an importance of features analysis is pushed into a second S3 bucket. 
            - The lambda function itself is set to trigger upon the successful completion of the first lambda function, which is detected by the second function based on a message sent to the AWS simple notification service (SNS) by the first function when it is completed successfully. The second function will not trigger upon an unsuccessful  attempt to run the first function. 
        - Part D: Return the results
            - The prediction from the machine learning model, as well as its analysis of features was uploaded to a second S3 bucket in the second lambda function as JSON files.
            - These JSON files are downloaded by the script in the dashboard, using a fetch(url) function and are then displayed by the dashboard, in their raw JSON form. 

![Dashboard](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Dashboard1.png)


![Dashboard Architecture](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Dashboard%20Architecture.png)

## References

1. https://www.diabetes.ca/en-CA/about-diabetes.
2. https://www.albertadiabetesfoundation.com/type-2-diabetes?gclid=CjwKCAiAqJn9BRB0EiwAJ1SztWQsJPkJ0cSmIA5_mo6FY-YJaOfQ3yL8lVYJY2vqKnNk5ba-Uz8mpRoC2YkQAvD_BwE.
3. https://www.jdrf.ca/who-we-are/type-1-diabetes/.
4. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/diabetes-canada-highlights-chronic-disease-surveillance-system.html.
5. https://www.diabetes.co.uk/category/diagnosis/symptoms/.  
 
