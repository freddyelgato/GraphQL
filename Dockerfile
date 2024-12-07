FROM node:20-alpine


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install --production --silent


COPY . .


EXPOSE 4000


RUN chown -R node /usr/src/app


USER node


CMD ["node", "index.js"]
