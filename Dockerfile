FROM node:4.7.2

RUN mkdir /src

WORKDIR /src
ADD package.json /src/package.json
RUN npm install

EXPOSE 8080

CMD npm start
