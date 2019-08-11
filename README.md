<b>die-mannschaft</b>

Simple API that provides soccer statistics using a public database

- Source Data: https://www.kaggle.com/hugomathien/soccer
- Data description: http://www.football-data.co.uk/notes.txt

HOW TO INSTALL
==============

1) Download the code
2) Download the database file "soccer.rar" from https://www.kaggle.com/hugomathien/soccer
3) Unpack the "soccer.rar" file as "soccer.sqlite" to the "data" folder
- You can also unpack the "soccer.rar" file from the "data" folder itself
4) run the following command:
    npm install
5) run the following commnad to start the node server (default port 8000):
    node server.js

AVAILABLE APIs
==============

1) GET /api/countries
2) GET /api/teams
3) GET /api/leagues
4) GET /api/player/:id
5) GET /api/summary/:season