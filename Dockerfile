FROM node:12

ENV PORT=4000
EXPOSE 4000
WORKDIR /app
RUN npm install -g prisma
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run-script build
CMD ["node","/app/dist/index.js"]