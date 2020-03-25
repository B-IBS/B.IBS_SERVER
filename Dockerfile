FROM node:12.16.1

ENV PORT=4000
ENV PRISMA_NETWORK=http://prisma:4466
ENV SCHEMA_PATH="/app/src/schema.graphql"

EXPOSE 4000
RUN npm install -g prisma
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN cd prisma && prisma generate
RUN npm run-script build
CMD ["/app/entrypoint.sh"]