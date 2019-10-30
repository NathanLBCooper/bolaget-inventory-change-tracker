FROM node:11-alpine
RUN mkdir -p /workspace
WORKDIR /workspace
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "live"]