// import the data from data.js
const tableData = data;

// reference the HTML table using d3
// this declares the variable tbody and d3.select tells JS to look for the tbody tags in html
var tbody = d3.select('tbody');

// Create a function to build a table
function buildTable(data) {
    // the first thing we want to do is clear data (remove existing filters)
    // reference the table then fill it with an empty string
    tbody.html("");

    // Now loop through the data in each row
    // reference the data being imported, initiate the loop, pass the parameter\
    // traditional function would work but arrow keeps it neater
    data.forEach((dataRow) => {
        // append a row to the table body
        // use let function to narrow the scope of the variable row
        // each object (ufo sighting) in array will be wrapped in a tr tag (table row)
        let row = tbody.append("tr");
        
        // tell js to reference one object from the array of ufo sightings
        // dataRow argument indicates that we want the values to go into the data rows
        // for each val specifies that we want one object per row
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table
            let cell = row.append("td");
            // extract only the text from the value
            cell.text(val);
        }
       );
    });
}
// Create a new function to handle clicks
function handleClick() {
    // get datetime value from filter and store in memory
    // .select() selects the first element that matches our string, tells it what to look for
    // .property("value") tells D3 to not only look for the date values, but to store in memory
    let date = d3.select("#datetime").property("value");
    // set default filter (display all data)
    let filteredData = tableData;

    //Check to see if a date was entered
    if (date) {
        // date filter - see notes for details
        filteredData = filteredData.filter(row => row.datetime === date);
      };
    // rebuild the table using the filtered data (no filter? original data)
    buildTable(filteredData);
};

// listen for click event
// #filter-btn will be a button tag in the html, this links our code directly to it 
// handleClick tells d3 to execute the function when the id filter btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// buiild the table that loads as soon as the page does
buildTable(tableData);