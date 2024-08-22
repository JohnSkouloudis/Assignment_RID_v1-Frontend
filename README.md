# assignment_rid_v1_frontend

This template should help get you started developing with Vue 3 in Vite.

## Docker

### Pull
```sh
docker pull ghcr.io/johnskouloudis/assignment_rid_v1_frontend:latest

```
### Run 
```sh
docker run -e VITE_BACKEND_URL=localhost:9090 \
           -p 8080:5173 \
           rid_v1_frontend 
           
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
