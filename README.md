# posisiterakhir - Deanu Haratinu

This is a full stack project for my personal website. Built as a monorepo for easy maintenance and development.

## Getting Started

First, after a clean clone, run:

```bash
npm install
```

To run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the running app.

## Debug the App

We can debug the app using vscode built in debugger.
Just make sure proper `launch.json` file is present, and hold 3 configs for:

1. Debug server-side
2. Debug client-side
3. Debug full stack

To debug the server-side, run the first debug config (debug server-side). All the breakpoints and logs will be available throught the integrated debugger and terminal on vscode.

To debug the client-side, we need the server side to be running first, and run the second debug config (debug client-side). The breakpoints will be available to debut the client-side.

## Run on Local Docker

Build the image:

```bash
docker build \
--build-arg NEXT_PUBLIC_SUPABASE_URL=<value> \
--build-arg NEXT_PUBLIC_SUPABASE_ANON_KEY=<value> \
-t posisiterakhir .
```

Run container:

```bash
docker run \
  -e NEXT_PUBLIC_SUPABASE_URL=<value> \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=<value> \
  -p 80:80 \
  --name posisiterakhir
  posisiterakhir
```
