#!/bin/bash
if [ -e "./.env" ]; then
rm ./.env
fi

if [ -e "./upload" ]; then
rm -rf ./upload
fi

echo Enter appKey:
read appKey

echo Enter appSecret:
read appSecret

echo Enter database:
read database

echo Enter user:
read user

echo Enter password:
read password

echo Enter host:
read host

mkdir ./upload
touch ./.env
echo "appKey = \"$appKey\"
appSecret = \"$appSecret\"
host = \"$host\"
user = \"$user\"
password = \"$password\"
database = \"$database\"" >> .env

npm install

node index.js


