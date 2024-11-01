# Base image for Node
FROM node:14

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the frontend on port 3000
EXPOSE 3000

# Start the frontend app
CMD ["npm", "start"]
