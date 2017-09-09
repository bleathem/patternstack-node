# Patternstack node server
A node.js server for a PatternFly front-end application.

## Docker

The easiest way to run and develop this application is with docker.  Docker can be installed accordin to the following instructions: (https://docs.docker.com/engine/installation/).

With docker installed, run `npm run docker:dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## No Docker

Alternatively, if you don't want to use docker, and want to manage your environment locally follow these instructions.

### Environment

Both the CLI and generated project have dependencies that require Node 4 or higher, together with NPM 3 or higher.

Install the project dependencies:

```
npm install
```

## Running locally

```
npm install
npm run serve:dev
```

Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## API docs

A swagger.yml file documenting the API is available at `http://localhost:3000/apidoc/swagger.yml`
