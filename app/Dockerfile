FROM node:12-alpine
RUN apk add --no-cache bash
RUN mkdir -p /workspace
WORKDIR /workspace
ENV EXPO_DEBUG=true

COPY . .
RUN yarn
EXPOSE 19000
EXPOSE 19001
EXPOSE 19006

CMD ["yarn", "run", "web"]