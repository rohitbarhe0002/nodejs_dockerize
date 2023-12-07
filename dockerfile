FROM node:latest
WORKDIR /app
COPY . .
RUN npm install -g nodemon
EXPOSE  5000 
CMD ["npm","run","dev"]
