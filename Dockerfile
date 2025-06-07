FROM node:22 as build

WORKDIR /app

COPY . .

RUN npm install && npm run build --workspace=packages/server

FROM node:22-alpine as runtime

WORKDIR /app

COPY --from=build app/packages/server/dist .
COPY --from=build app/packages/server/package.json ./package.json
COPY --from=build app/packages/server/.env.sample .env

ENV APP_PORT=8080
ENV NODE_ENV=production

RUN npm install --omit=dev

EXPOSE $APP_PORT

CMD ["node", "index.js"]
