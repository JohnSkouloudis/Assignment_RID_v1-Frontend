# Assignment_RID_v1_Frontend

This Project is meant to work as a UI for the [Backend](https://github.com/JohnSkouloudis/Assignment_RID_v1)

## Requirements
* Node.js
* [Backend](https://github.com/JohnSkouloudis/Assignment_RID_v1)


## Installation & Run
* Clone the repository
```
git clone https://github.com/JohnSkouloudis/Assignment_RID_v1_Frontend.git
```
```
cd Assignment_RID_v1_Frontend
```
* Create a .env file 

```
  VITE_BACKEND_URL=YOUR_URL
```
* Install dependencies
  ```
  npm install
  ```

* Start 
```
npm run dev
```

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
