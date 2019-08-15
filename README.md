<b>die-mannschaft</b>

Simple API that provides soccer statistics using a public database

- Source Data: https://www.kaggle.com/hugomathien/soccer
- Data description: http://www.football-data.co.uk/notes.txt

HOW TO INSTALL
==============

1) Download the code
2) Download the database file "soccer.rar" from https://www.kaggle.com/hugomathien/soccer
3) To install SQLite database 
- Unpack the "soccer.rar" file as "soccer.sqlite" to the "data" folder
- You can also unpack the "soccer.rar" file from the "data" folder itself
4) To install MySQL database
- Download the MySQL dump file from https://drive.google.com/open?id=1zNMAvHwRdK20HEvdCPimi7B96GUP6d6p
- mysql -u <user> -p < soccer-my-dump.sql
5) run the following command:
    npm install
6) run the following commnad to start the node server (default port 8000):
    node server.js

![Sync-Communication](https://user-images.githubusercontent.com/24611413/62988743-70f0dc00-be13-11e9-9cb9-be8c10d1d3e7.jpg)

AVAILABLE APIs
==============

SQLite
1) GET /api/sqlite/countries
2) GET /api/sqlite/teams
3) GET /api/sqlite/leagues
4) GET /api/sqlite/player?id={id}
5) GET /api/sqlite/summar?season={season}

MySQL
1) GET /api/mysql/countries
2) GET /api/mysql/teams
3) GET /api/mysql/leagues
4) GET /api/mysql/player?id={id}
5) GET /api/mysql/summary?season={season}
