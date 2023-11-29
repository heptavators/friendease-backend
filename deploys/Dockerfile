# Docker Image
FROM node:18.16.1 

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install Package Manager
RUN npm install

# Bundle app source
COPY . .

# Copy .env.prod file to .env
COPY .env.prod .env

EXPOSE 3000
  
CMD ["node", "index.js"]