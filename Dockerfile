FROM node:lts-alpine


WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5173

#default backend url
ENV VITE_BACKEND_URL=http://host.docker.internal:9090

CMD ["npx","serve", "-s", "dist", "-l", "5173"]