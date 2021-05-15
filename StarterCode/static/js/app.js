// from data.js
var tableData = data;

// Level 1: Automatic Table and Date Search (Required)

// Using the UFO dataset provided in the form of an array of JavaScript objects
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Need to create a table so we're using tbody here
var tbody = d3.select("tbody");

tableData.forEach(function(udata){
    var row = tbody.append("tr");
    // console.log(udata);
    row.append("td").text(udata.datetime);
    row.append("td").text(udata.city);
    row.append("td").text(udata.state);
    row.append("td").text(udata.country);
    row.append("td").text(udata.shape);
    row.append("td").text(udata.durationMinutes);
    row.append("td").text(udata.comments);
});

// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the date/time column to find rows that match user input.
// Select the button
var button = d3.select("#filter-btn");
// // Select the form
// var form = d3.select("#form-group");

// Create event handlers 
button.on("click", runEnter);
//form.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // clear the original table
    tbody.html("");

    //filter
    var filterData = tableData.filter(u => u.datetime === inputValue);

    filterData.forEach(function(fdata){
        var row = tbody.append("tr");
        // console.log(udata);
        row.append("td").text(fdata.datetime);
        row.append("td").text(fdata.city);
        row.append("td").text(fdata.state);
        row.append("td").text(fdata.country);
        row.append("td").text(fdata.shape);
        row.append("td").text(fdata.durationMinutes);
        row.append("td").text(fdata.comments);
    });
}