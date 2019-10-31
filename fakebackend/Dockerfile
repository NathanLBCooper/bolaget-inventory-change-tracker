FROM node:11-alpine
EXPOSE 3000
EXPOSE 5858

WORKDIR /workspace
COPY package.json /workspace/package.json
RUN yarn install --production=false

CMD ["yarn","nodemon","app.js","0.0.0.0","5858","--legacy-watch"]