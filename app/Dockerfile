FROM node:13-alpine
RUN apk add --no-cache bash
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006
EXPOSE 35729
ENV EXPO_DEBUG=true
ENV CHOKIDAR_USEPOLLING=true
WORKDIR /workspace

COPY package.json /workspace/package.json
COPY yarn.lock /workspace/yarn.lock
RUN yarn install --production=false

COPY . .

CMD ["yarn", "web"]