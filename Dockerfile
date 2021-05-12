FROM node:14

RUN mkdir /portfolio-next

WORKDIR /portfolio-next

COPY ./package.json /portfolio-next

RUN npm install

COPY . /portfolio-next

RUN npm run build

CMD ["npm", "start"]

