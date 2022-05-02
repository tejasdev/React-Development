FROM node:14.18-alpine

WORKDIR /app

ENV PATH /app/mode_modules/.bin:$PATH

COPY /my-app ./

RUN npm install
RUN npm install react-scripts@5.0.0 -g

#start app
CMD ["npm", "start"]