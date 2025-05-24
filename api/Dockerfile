FROM node:alpine3.19

RUN addgroup -g 1001 APIGROUP && \
    adduser -G APIGROUP -u 1001 APIUSER -s /bin/sh -D 

WORKDIR /api

COPY package*.json ./
RUN npm install -g nodemon && \
    npm install

COPY --chown=APIUSER:APIGROUP . .

EXPOSE 3000

USER APIUSER
CMD ["npm", "run", "dev"]