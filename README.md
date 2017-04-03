# Code Challenge - Week 5 (Mongo Databases and Full Stack Logic - Debug)

LIST OF ERRORs:
1. app.js line 19/20
--change the model names to 'apartments' or 'houses' to not cause the conficts of overwriting the 'listings' model

2. app.js: The localhost is 27017

3. index.html: get the app.get to declare the path of the default file of index.html

4. index.html : add the vendors folder which contains the bootstrap and jquery.s

5. client.js: after ajax get listing, appendListings(retrievedData) needs to be called

6. body-parser needs to be called app path

7. Change 'port' to 'PORT'

## Overview

This Code Challenge is different from the rest. This time, you will need to debug an existing code base. You will need your
complete knowledge of the past 4 weeks to successfully navigate the problems that are in the code.

Keep in mind, often debugging is stressful for a couple reasons:

* The problems are not obvious, especially when you did not write the code.

* The solutions are often simple. Have confidence in your solutions and move onto the next problem.

* Debugging code bases that are not yours takes time. Take your time to work through each of the steps.


In addition to making the changes to the code base to correct the code, update this README.md file to explain your solutions.
Meaning, in your own words, explain the problem and why your solution fixes the problem.


## TODO

### Base Mode
[ ] - Mongo does not seem to be connecting correctly.

[ ] - The models have a conflict.

[ ] - Index.html is not being properly served.

[ ] - Posting information does not seem to come up correctly on the req.body as intended.

[ ] - The information from the database is not being appended to the DOM.


### Hard Mode
[ ] - All the information being appended on the DOM is not lining up together in their respective row.


### Pro Mode
[ ] - Not that you need to, but if you were to post this on Heroku, it would not work correctly.
