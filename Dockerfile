# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
# default command (bisa override saat run)
CMD ["node", "index.js", "7"]
