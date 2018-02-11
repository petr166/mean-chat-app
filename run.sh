docker build -t chat-app-api . &&
docker container rm -f chat-app-api &&
docker run -p 8081:8080 --link mongo --env-file .env -d --name chat-app-api chat-app-api