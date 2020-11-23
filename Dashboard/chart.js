var ageMap = {};
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("diabetess.json").then((data) => {
        var diabetesAge = data.Age;
        for (let index in diabetesAge) {
            ageMap[diabetesAge[index]] ||= []
            ageMap[diabetesAge[index]].push(index);
        }
        
        for (let age in ageMap) {
            selector
                .append("option")
                .text(age)
                .property("value", age);
        }
        var firstAge = diabetesAge['0'];
        buildCharts(firstAge);
        
    });

    }
    // initialize the dashboard
    init();
function optionChanged(newAge) {
    
    buildCharts(newAge);
};

function symptoms(key, indexes, data) {
    var symptomData = [];
    for (let index in data[key]) {
        if (indexes.includes(index) && data[key][index] === 'Yes') {
            symptomData.push(index);
        }
    }
    return symptomData;
}


function buildCharts(age) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("diabetess.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
      var indexes = ageMap[age];
      // 4. Create a variable that filters the samples for the object with the desired sample number.
    //   var filteredSamples = Object.values(sampleObj => sampleObj.id == sample);
      //  5. Create a variable that holds the first sample in the array.
    //   var firstSample = indexes[0];
  
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    //   var otu_ids = firstSample.otu_ids;
    //   var otu_labels = firstSample.otu_labels;
    //   var sample_values = firstSample.sample_values;
  
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
    //   var sortedIds = otu_ids.slice(0, 10).reverse();
      //var 
    //   var yticks = sortedIds.map(otu_ids => "OTU" + otu_ids);
    // var Polyurias = [];
    // for (let index in data.Polyuria) {
    //     if (indexes.includes(index)) {
    //         Polyurias.push(index);
    //     }
    // }
    // var chartData = {
    //     'Polyuria': symptoms('Polyuria'),
    //     'Polydipsia'
    // }
    var chartData = {};
    for (let sample in data) {
        if (sample === 'Age' || sample === 'Gender' || sample === 'class') {
            continue;
        }
        chartData[sample] = symptoms(sample, indexes, data);
    }
    //   console.log(sortedIds);
    //   console.log(yticks);

      // 8. Create the trace for the bar chart. 
      //var 
      var trace = {
        y: Object.values(chartData).map((c) => c.length),
        x: Object.keys(chartData),
        type: "bar",
        hovertext : Object.values(chartData).map((c) => `${(c.length / indexes.length * 100).toFixed(2)}%`),
        orientation: "v",
      };
      //var
      var barData = [trace];
      // 9. Create the layout for the bar chart. 
      //var 
      var barLayout = {
        plot_bgcolor: '#ccc',
        title:"Symptoms by age",
        margin: { t: 50, b: 80 },
        paper_bgcolor: "#ccc",
        font: {color: "black"}
         };
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout);
  
       // 1. Create the trace for the bubble chart.
    //   var trace1 = {
    //      x : otu_ids,
    //      y: sample_values,
    //      hovertext: otu_labels,
    //      mode : 'markers',
    //      marker : {size:sample_values, color: otu_ids, colorscale : "Earth" }
    //    };
    //   var bubbleData = [trace1];
  
    //   // 2. Create the layout for the bubble chart.
    //   var bubbleLayout = {
    //     plot_bgcolor:'#ccc',
    //     paper_bgcolor:'#ccc',
    //     title:"Bacteria Cultures Per Sample",
    //     xaxis:{title: "OTU ID"},
    //     showlegend: false,
    //     height:500,
    //     width: 1200      
    //   };
  
    //   // 3. Use Plotly to plot the data with the layout.
    //   Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    //    // 4. Create the trace for the gauge chart.
    
    //   var metadata = data.metadata;
    //   var resultArray= metadata.filter(sampleObj => sampleObj.id == sample);
    //   var result = resultArray[0];
    //   var frequency = result.wfreq;
  
    //   var gaugeData = [
    //     {
    //       domain: { x: [0, 1], y: [0, 1] },
    //       value: frequency,
    //       title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
    //       type: "indicator",
    //       mode: "gauge+number",
    //       gauge: {
    //         axis:{range:[0,10]},
    //         bar: { color: "black" },
    //         steps: [
    //           { range: [0, 2], color: "red" },
    //           { range: [2, 4], color: "goldenrod" },
    //           {range: [4,6], color: "gold"},
    //           {range: [6,8], color: "yellowgreen"},
    //           {range: [8,10], color: "green"}
    //         ],
    //       }
    //     }
    //   ];
   
    // // 5. Create the layout for the gauge chart.
   
    //   var gaugeLayout = { width: 600, height: 500, paper_bgcolor: '#ccc', plot_bgcolor: '#ccc'};
    //   // 6. Use Plotly to plot the gauge data and layout. 
      
    //   Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  
      });
  
  }

