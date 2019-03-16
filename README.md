# Shieldfy-demo-app

this an express app for QA and quick test the SDK of shieldfy

## Installation

1. clone the repo `git clone https://github.com/Amr-Reda/shieldfy-demo-app.git`.
2. change directory `cd shieldfy-demo-app`.
3. run command `bash autorun.sh` then enter the required input :-
    1. **appKey**: this is a shieldfy appKey for SDK you can register in [Shieldfy.io](https://shieldfy.io/) to get the appKey.
    2. **appSecret**: this is a shieldfy appSecret for SDK you can register in [Shieldfy.io](https://shieldfy.io/) to get the appSecret.
    3. **database**: the database name you must create it first.
    4. **user**: username of database for example `root`.
    5. **password**: password of database for the choosen username.
    6. **host**: database host for example `localhost` or url if the database not at the local machine.
4. the app is running at [http://localhost:3000/](http://localhost:3000/)

**NOTE:** if you want to edit the previous inputs you can open `.env` and edit, OR run command `bash autorun.sh` again.

## Usage

### POST `/user`
----------
add new user

params:
```
{
    "name": "John"
}
```

### GET `/user?name=Mario`
----------
get a user

params:

`name:` the user name


### POST `/file`
----------
add a file

params:
```
    "file": the file you want to upload
```

### GET `/file?name=file.js`
----------
get a file

params:

`name:` the file name

## TODO

add vulnurable packsge.
