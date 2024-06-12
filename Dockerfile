FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY frontend/package*.json frontend/

RUN npm run install-client --omit=dev

COPY backend/package*.json backend/

RUN npm run install-server --omit=dev

COPY frontend/ frontend/

RUN npm run build --prefix frontend

COPY backend/ backend/

USER node

CMD [ "npm", "start", "--prefix", "backend" ] 

EXPOSE 70