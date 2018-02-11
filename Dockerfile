# Create image based on the official Node 8 image from the dockerhub
FROM node:carbon-alpine

RUN npm install -g --silent pm2

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app/

# Install dependecies
RUN npm install --silent

# Get all the code needed to run the app
COPY . /app/

# Serve the app
CMD pm2-docker process.yml
