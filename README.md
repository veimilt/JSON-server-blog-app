Simple blog app using JSON server for displaying, adding, and deleting blogs

This was made to practice using JSON server for testing purposes in front-end projects

tutorial from Net Ninja - https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD&index=1


to start, install json server via npm:

npm install -g json-server


run the following command in the project folder to start the json server using the data in /data/db.json:

json-server --watch data/db.json 
