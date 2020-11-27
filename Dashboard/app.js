//const { Console } = require("console");

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
                this.Age = age;
                this.Gender = gender;
                this.Polyuria = polyuria;
                this.Polydipsia = polydipsia;
                this.sudden_weight_loss = weight_loss;
                this.weakness = weakness;
                this.Polydipsia = polydipsia;
                this.Genital_thrush = thrush;
                this.visual_bluring = vision;
                this.Itching = itching;
                this.Irritability = irritability;
                this.delayed_healing = healing;
                this.partial_paresis = paresis;
                this.muscle_stiffness = stiffness;
                this.Alopecia = alopecia;
                this.Obesity = overweight;

            }
        let data = new Data(age, gender, polyuria, polydipsia, weight_loss, weakness, polyphagia, thrush, vision, itching, irritability, healing, paresis, stiffness, alopecia, overweight); 
        //Display JS object
        console.log (data);
        // Convert JS object to JSON
        let myJSON = JSON.stringify(data);
        console.log(myJSON);

    // var BucketName = "diabetes-dataset";
    // var bucketRegion = "US East (Ohio) us-east-2";
    // var IdentityPoolId = "us-east-2_2Hq6mRygS";
    
    // AWS.config.update({
    //     region: bucketRegion,
    //     credentials: new AWS.CognitoIdentityCredentials({
    //       IdentityPoolId: IdentityPoolId
    //     })
    //   });
    
    //   var s3 = new AWS.S3({
    //     apiVersion: "2006-03-01",
    //     params: { Bucket: BucketName }
    //   });

    // function object_to_S3()
    // {
    //     var params = {Bucket: BucketName, Key: 'key', Body: string, ACL: "public-read"};
    //     s3.upload(params, function(err, data) {
    //       console.log(err, data);
    //     });
    // }
    
}


