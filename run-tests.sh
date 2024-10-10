#!/bin/zsh

docker pull grafana/k6

npm run bundle

docker run --rm -v ./:/src -i grafana/k6 run --vus "$1" --duration "$2"s /src/dist/"$3".js > results/"$4-results".txt 2> results/"$4-stderr".txt
