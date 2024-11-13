# Practical introduction into next.js

![Screenshot of example application](screenshot.png)

# Start the (Java) backend

> **The backend listens on port 8080**. Please make sure this port is available.
>
> If that port is already taken, you have to:
>
> 1. adjust the port in `docker-compose-recipify.yaml` (`backend` service)
> 2. export env variable `RECIPIFY_BACKEND` with new URL and port to the backend (`export RECIPIFY_BACKEND=http://localhost:YOUR_NEW_PORT`)

Start the backend using `docker compose` from the root folder of this repo:

```bash
docker-compose -f docker-compose-recipify.yaml up -d
```

### Source Code

If you're interessted, the Java/Spring Boot source code of the backend is inside the folder `backend`. It does not contain any Next.js specific code, it only provides the HTTP API for our Next.js application.

# Start the frontend

In `frontend_nextjs`:

```bash

pnpm install

pnpm dev

# OR (to remove nextjs cache):
pnpm dev:clean

```

- Open app on http://localhost:8110

# Workspace

The folder `workspace` contains the source code for our step-by-step introduction. You can use it if you want to try building Next.js apps yourself.

## Contact

If you want to get in touch, please have a look at [https://nilshartmann.net/contact](https://nilshartmann.net/contact) to find my contact data.
