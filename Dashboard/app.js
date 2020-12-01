function collect_data()
{
    let age = document.getElementById("age").value;
    age = parseInt(age)
    console.log("Age: "+age)

    //import height and weight, calculate BMI then classify as overweight or not
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let BMI = 703*(weight/(height**2));
    //define variable that will hold status of being overweight. 
    let overweight;
    //console.log(BMI);
    if (BMI < 30)
        overweight = 0;
    else
        overweight = 1;
    console.log("Overweight: "+overweight);

    //import gender and encode as a variable
    let male = document.getElementById("male");
    let gender;
    if(male.checked==true)
        gender = 1;
    else 
        gender = 0;
    console.log("Gender: "+gender);

    //import polyuria and encode as a variable
    let yes1 = document.getElementById("yes1");
    let polyuria;
    if(yes1.checked==true)
        polyuria = 1;
    else 
        polyuria = 0;
    console.log("Polyuria: "+polyuria);

    //import polydipsia and encode as a variable
    let yes2 = document.getElementById("yes2");
    let polydipsia;
    if(yes2.checked==true)
        polydipsia = 1;
    else 
        polydipsia = 0;
    console.log("Polydipsia: "+polydipsia);

    //import polydipsia and encode as a variable
    let yes3 = document.getElementById("yes3");
    let weight_loss;
    if(yes3.checked==true)
        weight_loss = 1;
    else 
        weight_loss = 0;
    console.log("Weight Loss: "+weight_loss);

    //import irritability and encode as a variable
    let yes4 = document.getElementById("yes4");
    let irritability;
    if(yes3.checked==true)
        irritability = 1;
    else 
        irritability = 0;
    console.log("Irritability: "+irritability);

    //import paresis and encode as a variable
    let yes5 = document.getElementById("yes5");
    let paresis;
    if(yes5.checked==true)
        paresis = 1;
    else 
        paresis = 0;
    console.log("Paresis: "+paresis);

    //import polyphagia and encode as a variable
    let yes6 = document.getElementById("yes6");
    let polyphagia;
    if(yes6.checked==true)
        polyphagia = 1;
    else 
        polyphagia = 0;
    console.log("polyphagia: "+polyphagia);

     //import alopecia and encode as a variable
    let yes7 = document.getElementById("yes7");
    let alopecia;
    if(yes7.checked==true)
        alopecia = 1;
    else 
        alopecia = 0;
    console.log("Alopecia: "+alopecia);

     //import vision and encode as a variable
    let yes8 = document.getElementById("yes8");
    let vision;
    if(yes8.checked==true)
        vision = 1;
    else 
        vision = 0;
    console.log("Visual Blurring: "+vision);

    //import delayed healing and encode as a variable
    let yes9 = document.getElementById("yes9");
    let healing;
    if(yes9.checked==true)
        healing = 1;
    else 
        healing = 0;
    console.log("Delayed Healing: "+healing);

    //import itching and encode as a variable
    let yes10 = document.getElementById("yes10");
    let itching;
    if(yes10.checked==true)
        itching = 1;
    else 
        itching = 0;
    console.log("Itching: "+itching);

    //import stiffness and encode as a variable
    let yes11 = document.getElementById("yes11");
    let stiffness;
    if(yes11.checked==true)
        stiffness = 1;
    else 
        stiffness = 0;
    console.log("Stiffness: "+stiffness);

    //import thrush and encode as a variable
    let yes12 = document.getElementById("yes12");
    let thrush;
    if(yes12.checked==true)
        thrush = 1;
    else 
        thrush = 0;
    console.log("Genital Thrush: "+thrush);

    //import weakness and encode as a variable
    let yes13 = document.getElementById("yes13");
    let weakness;
    if(yes13.checked==true)
        weakness = 1;
    else 
        weakness = 0;
    console.log("General Weakness: "+weakness);
      
    //use forloop to reset all input fields after submission
    var myRadioList = document.getElementsByTagName("input");
        for (i = 0; i < myRadioList.length; i++) 
        {
            if (myRadioList[i].type == "radio")
                {
                    myRadioList[i].checked = false; 
                }
            else if (myRadioList[i].type == "number")
                {
                    myRadioList[i].value = "";
                }
        };
        // Use an object constructor function to create an object to store all of the data returned from the HTML form
        function Data() 
            {
                this.Age = {0:age};
                this.Gender = {0:gender};
                this.Polyuria = {0:polyuria};
                this.Polydipsia = {0:polydipsia};
                this.sudden_weight_loss = {0:weight_loss};
                this.weakness = {0:weakness};
                this.Polyphagia = {0:polyphagia};
                this.Genital_thrush = {0:thrush};
                this.visual_bluring = {0:vision};
                this.Itching = {0:itching};
                this.Irritability = {0:irritability};
                this.delayed_healing = {0:healing};
                this.partial_paresis = {0:paresis};
                this.muscle_stiffness = {0:stiffness};
                this.Alopecia = {0:alopecia};
                this.Obesity = {0:overweight};

            }
        let data = new Data(age, gender, polyuria, polydipsia, weight_loss, weakness, polyphagia, thrush, vision, itching, irritability, healing, paresis, stiffness, alopecia, overweight); 
        //Display JS object
        console.log (data);
        // Convert JS object to JSON
        let myJSON = JSON.stringify(data);
        console.log(myJSON);
    

    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-2'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials(
        {
            IdentityPoolId:"us-east-2:c9eae278-0fab-4455-b468-df4545798580"
            //'us-east-2:c9eae278-0fab-4455-b468-df4545798580',
        });
    
      
    var params = 
        {
            Bucket: "arn:aws:s3:us-east-2:767569721824:accesspoint/diabetes-data-ap", 
            Body: myJSON, 
            ACL: "public-read", 
            Key: "diabetes",
            ContentType: "application/json; charset=utf-8"
        };


    // Use S3 ManagedUpload class as it supports multipart uploads
    var upload = new AWS.S3.ManagedUpload({
        params: params
    });
        
    var promise = upload.promise();

    promise.then(
        function(data) {
          alert("Successfully uploaded file.");
        },
        function(err) {
          return alert("There was an error uploading your file: ", err.message);
        }
      );

      
    var fiveMinutes = 60 * 1.5;
    var intervalID = startTimer(fiveMinutes);
    function stopTimerCallback()
    { 
        stopTimer(intervalID)
    }
        
    setTimeout(stopTimerCallback, 90000)


    
    
    // Load render_results function after 90seconds
    setTimeout(render_results, 90000);
}

async function fetch_results(url) 
{
    try {
        let response = await fetch('https://diabetesmodelresults.s3.us-east-2.amazonaws.com/prediction.json', {
            method: 'GET',
            credentials: 'same-origin'
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

async function render_results(url) 
{
    let result = await fetch_results('https://diabetesmodelresults.s3.us-east-2.amazonaws.com/prediction.json')
    console.log(result);

    document.getElementById("jsonData").innerHTML = "<pre>"+JSON.stringify(result,undefined, 2) +"</pre>"

}

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var intervalID = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('#time').textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    return intervalID
}

function stopTimer(intervalID)
{
    clearInterval(intervalID);
    document.querySelector('#time').textContent = "00:00";


}


// window.onload = function () {
//     var fiveMinutes = 60 * 1.5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };
