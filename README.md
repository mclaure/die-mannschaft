## die-mannschaft : Sync API solution
```
Simple API that provides soccer statistics using a public database
```
![Sync-Communication](https://user-images.githubusercontent.com/24611413/62910994-b8626400-bd50-11e9-923b-ef0d5d8f3c1f.jpg)

* [Source Data](https://www.kaggle.com/hugomathien/soccer) - real world sample data 
* [Data description](http://www.football-data.co.uk/notes.txt) - detailed data description

## Installing

1. Download the code
2. Download the database file "soccer.rar" from [here](https://www.kaggle.com/hugomathien/soccer)
3. To install SQLite database 
* Unpack the "soccer.rar" file as "soccer.sqlite" to the "data" folder
* You can also unpack the "soccer.rar" file from the "data" folder itself
4. To install MySQL database
* Download the MySQL dump file from [here](https://drive.google.com/open?id=1zNMAvHwRdK20HEvdCPimi7B96GUP6d6p)
* run the following command:
```
mysql -u <user> -p < soccer-my-dump.sql
```
5. run the following command:
```
    npm install
```
6. run the following commnad to start the node server (default port 8000):
```
    node server.js
```
## Available APIs

**SQLite**
* GET /api/sqlite/countries
* GET /api/sqlite/teams
* GET /api/sqlite/leagues
* GET /api/sqlite/player?id={id}
* GET /api/sqlite/summar?season={season}

**MySQL**
* GET /api/mysql/countries
* GET /api/mysql/teams
* GET /api/mysql/leagues
* GET /api/mysql/player?id={id}
* GET /api/mysql/summary?season={season}

## Author

* **Marcelo Claure** - *Initial work*
