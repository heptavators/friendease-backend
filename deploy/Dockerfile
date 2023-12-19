# Use an official Node.js image as the base image
FROM node:18.16.1 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy environment variables file
COPY .env.example .env

# Build TypeScript code
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Specify the default command to run the application
CMD ["npm", "start"]
