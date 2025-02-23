# monochroMotion

## Installation

In the project directory, need to start:

```bash
npm install  
```

or

```bash
npm i  
```

This command will directly install the required dependencies into the directory you specify. After this command
completes, you can start the application.


## Run development mode

Use on of the following commands, to start local development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Starts the process of compiling and assembling the application from source code.
Special configs with the necessary settings are used in this process.

The result of a successful execution there will be information  about the time spent on assembly and the address: http://localhost:8000

## Create production build

Use next command to create production build:
```bash
npm run build
```

Starts the process of creating an `out` directory from source code with compiled Application.

Also like command `npm run dev`, will use special configs with the necessary settings to create production application build.

## Create site map
Automatically process in production build.

To generate site map manually use:
```
npm run postbuild
```

Starts the process of creation two main components for successfully indexing your pages. It's files ``sitemap.xml`` and ``robots.txt``

``sitemap.xml`` is a list of all posts and pages you want crawlers to discover and index, and ``robots.txt`` shows which
parts of the website should be included and completely excluded from crawling.


### Powered by: ``dm``
