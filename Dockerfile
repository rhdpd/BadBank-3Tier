FROM node:17
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json
# where available (npm@5+)
COPY package*.json ./

RUN  npm install

#Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]