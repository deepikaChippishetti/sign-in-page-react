FROM node:16-alpine
WORKDIR /regionalflavors
COPY . .
RUN npm install 
CMD ["npm", "run", "dev"]
EXPOSE 3200