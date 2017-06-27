# Create image based on the official Node 6 image from the dockerhub
FROM node:boron

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/

# Expose the port the app runs in
EXPOSE 8080

# Serve the app
CMD npm start
