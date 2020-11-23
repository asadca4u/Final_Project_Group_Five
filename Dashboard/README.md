## Dashboard
Dashboard allows to view, and control data associated with different categories and information. The analytical dashboard for diabetes prediction will allows users to input age, gender and test into interactive menus to predict the how many people had the symptoms by age and calculate their percentage.
dashboard layout:

![dashboard-layout](https://user-images.githubusercontent.com/67460581/99928008-99e56980-2d04-11eb-818e-c0584ec4fc16.PNG)

This layout was created in JustinMind program. The dashboard contains 3 interactive fields �Age, Gender and Test�. The Age represent all ages in the diabetes dataset. The Gender shows female and male option to choose. The Test shows positive and negative. The bar chart shows the symptoms by age.

Tools:
D3 JavaScript, HTML elements, Plotly, and JavaScript.

Data:
The data set, we are using was downloaded as csv file from University of California Irvine Machine Repository and shown below:


![data](https://user-images.githubusercontent.com/67460581/99928011-9eaa1d80-2d04-11eb-9558-0a8c7f39a4df.png)

![json](https://user-images.githubusercontent.com/67460581/99928017-a49ffe80-2d04-11eb-9301-cf27e21268de.PNG)


The HTML elements to create index.HTML file and the interactive fields


-	<head> to show the heading on top
-	<class=� row> used to create the rows in the web page
-	<class=� col-md-8�> to size the columns to fit in page
-	<class=� well�> used to create the drop-down menu
-	<p> to add a paragraph about the Topic �Diabetes�
-	<select> element to connect the function created in JavaScript.
  

The JavaScript was used to create the script to connect the function for dropdown menu and bar chart.


-	D3.json method used to read diabetess.JSON file
-	Selector to create select function to add value into the interactive drop-down fields in index.html
-	Function init () to initiate the dashboard
-	Function buildCharts(age) to create the data for charts
-	Plotly function to create analytical charts for diabetes dataset