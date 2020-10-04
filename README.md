# UFO Analysis

## Purpose

The purpose of this analysis is  to create a webpage with a dynamic table, able to filter UFO sightings on date, location, and shape. 



## Results

In order to understand the webpages functionality, here are some examples of how the filter works. 



When the page loads, it is automatically populated with each entry from our "data.js" file:

<img src="static\images\unfiltered_table.png">



The filter responds to input in any (or all) of the 5 filter fields: date, city, state, country, and shape. For example purposes, we are going to filter for sightings on 1/01/2010 in California.

<img src="static\images\filtered_table.PNG"> 



As you can see above, we are now only viewing any sightings according to our filter. To clear the filter, simply replace or delete the input in any of the filter fields. 



## Summary

While this solution is effective, there are a few drawbacks. For one, the text inputs are case-sensitive. This means that if someone types "CA" for the state filter, it will return an empty table, whereas "ca" would populate what they are looking for. In addition, any input that is not spelled exactly correctly will also return an empty table.  The table is also unable to provide any partial matches - for example, typing "a" into the state field will not populate the table with all viewings in states that start with "a", but an empty table. 



Some potential future improvements could include:

1. Setting a maximum character length for the "state" and "country" fields, so that the format is consistent and users can only use the given number of characters. 
2. Error handling for partial matches, misspelled words, and case sensitivity
3.  As a matter of preference, one could change the table to still be filtered on click, rather than immediately on change. This could make it a little easier for entry and error handling - for example, scripting an error message rather than simply an empty table. I personally prefer entering all filters and then clicking the button to the "on change" filter.

