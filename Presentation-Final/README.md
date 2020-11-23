# Prediction of Diabetes
Diabetes, a chronic metabolic disorder, is one of the fastest growing disease regardless of geographic, racial, or ethnic context. there are two types of disbetes: Type 1 and Type 2. Type 1 diabetes happens when the pancreatic beta cells produce either very little insulin or no insulin. Type 2 dibetes happens when body become insulin resistance. The common symptoms for Type 1 diabetes are sudden weight loss, Dehydration, delayed healing, blurred vision and Type 2 have similar symptoms or no symptoms at all depends on body reaction. [1, 2]. Type 1 diabetes strikes both kids and adults at any age.
# Why we have selected "Prediction of Diabetes" topic
300,000 plus Canadians may have Type 1 diabetes and nationally the average rates has been growing at an estimated 5.1% per year. Total health care costs resulting from diabetes in Canada is expected to increase to over $16.9 billion (CAD) anually by 2020. to create a system, which can diagonose the diabetes with symptoms in early stage with help of sysmptoms and can reduce the testing cost and time which has been consumed to get diagnose.
# Description of Data
The data set contains reports of diabetes related symptoms of 520 people. 

![Dataset](https://github.com/asadca4u/Final_Project_Group_Five/blob/main/Images/Dataset.png)

## Exploring the dataset 
definition: data exploration is the initial steps in data analysis in which, used data visulization and techniques to describe data characteristics, such as, size, data type, rows and columns, in order to understand the nature of data
data exploration tools:
we used manual exploration to explore diabetes dataset. Jupyter notebook to write the script with help of Pandas and Python.
what data is available?
Diabetes_df.columns to explore the columns in data set
![columns](https://user-images.githubusercontent.com/67460581/99941557-7386f480-2d2b-11eb-9acd-4a1d5b6a119e.png)

 
what type of data is available?
Diabetes_df.dtypes to display the type of data for each column

![dtypes](https://user-images.githubusercontent.com/67460581/99941514-5ce09d80-2d2b-11eb-89f3-743565338dee.PNG)



 
what data is missing?
pandas "isnull" method to check if any data is missing. Used print statement to get sum of null values for each column and diabetes_df.dropna() to delete all null values if any existed.

![nullvalues](https://user-images.githubusercontent.com/67460581/99941418-3c184800-2d2b-11eb-8cef-ab3e1418183c.PNG)
 
what data can be removed?
There are no Null values in the dataset

## Data Processing
The fourth main stage data processing cycle is Data Processing. Data processing is defined as the converting of information into binary shape so computer can understand. Our Daibetes dataset was consisted of age, diabetes early stage symptoms and Class. The symptoms had yes, no and class had possitive and negetive data. We transformed the data into binary form for supervised machine learning model

![transform](https://user-images.githubusercontent.com/67460581/99941453-48040a00-2d2b-11eb-8d5a-cde63f8c9c41.PNG)
![transformdtypes](https://user-images.githubusercontent.com/67460581/99941493-581be980-2d2b-11eb-8ad2-bc45125c1d34.PNG)

 
## Data analysis



 





## References:
1. https://www.diabetes.ca/en-CA/about-diabetes
2. https://www.albertadiabetesfoundation.com/type-2-diabetes?gclid=CjwKCAiAqJn9BRB0EiwAJ1SztWQsJPkJ0cSmIA5_mo6FY-YJaOfQ3yL8lVYJY2vqKnNk5ba-Uz8mpRoC2YkQAvD_BwE
3. https://www.jdrf.ca/who-we-are/type-1-diabetes/
4. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/diabetes-canada-highlights-chronic-disease-surveillance-system.html

