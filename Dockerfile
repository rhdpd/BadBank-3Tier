FROM node:14
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json
# where available (npm@5+)
COPY package*.json ./

RUN  npm install

#Bundle app source
COPY . .

RUN npm run build

COPY entrypoint.sh /entrypoint.sh
RUN ["chmod", "+x", "/entrypoint.sh"]
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000
CMD [ "npm", "start" ]
