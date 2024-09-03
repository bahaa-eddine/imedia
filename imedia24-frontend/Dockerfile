# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm i 

# Copy the rest of the application code
COPY . .

# Expose the port 
EXPOSE 3000

# Start the React dev server
CMD ["npm", "start"]
