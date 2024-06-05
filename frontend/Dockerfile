FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g expo-cli

EXPOSE 19000

CMD ["expo", "start", "--tunnel"]
