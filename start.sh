#!/bin/bash

echo "===> Running ... "
./env2js.sh > build/config.js
echo "===> Running ... "
serve -s build -p 5000
