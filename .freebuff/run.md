# Run doc — Portfolio Jefferson (dev server)

Vite 4.5.3 + React 18 SPA. Package manager: **npm** (package-lock.json present).

## Reproduce the uncommitted artifacts a fresh checkout needs

1. **Env files** — copy from the main checkout (never symlink; adapt values if ports differ):
   ```
   cp /home/jefferson/Projetos/ativos/Portifolio-Jefferson/.env .env
   cp /home/jefferson/Projetos/ativos/Portifolio-Jefferson/.env.local .env.local
   ```
   (`.env` / `.env.local` hold `VITE_*` values such as the Web3Forms key — values are never recorded here.)
   Note: when this thread's workspace IS the main checkout, these files already exist — skip the copy.
2. **Dependencies**:
   ```
   npm ci
   ```
3. No other build/codegen steps are required for dev mode. (`npm run build` is only needed for production output into `dist/`.)

## Run the server

1. Start (default port comes from `vite.config.js` → `server.port: 3000`, `host: true`):
   ```
   npm run dev
   ```
2. If port 3000 is busy, pass a free one instead of editing config:
   ```
   npm run dev -- --port <free-port>
   ```
3. Detached launch for previews (Linux):
   ```
   { nohup npm run dev > "<log-file>" 2>&1 < /dev/null & echo $! > /tmp/freebuff-preview.pid; disown; }
   ```
   If the command runner reaps the process group (npm pid dies with an empty log within seconds), relaunch in its own session:
   ```
   setsid bash -c '{ nohup npm run dev > "<log-file>" 2>&1 < /dev/null & echo $! > /tmp/freebuff-preview.pid; disown; }'
   ```
   The recorded pid is the `npm run dev` wrapper — vite runs as its child; both survive.
4. Verify before registering a preview:
   - `kill -0 $(cat /tmp/freebuff-preview.pid)` → alive after ~5 s
   - log shows `VITE ready` and `Local: http://localhost:3000/`
   - `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` → 200

## Current instance (this thread)

- URL: http://localhost:3000/ · port 3000 (project default, was free)
- Process: pid 43487 (`npm run dev`, setsid-detached)
- Log: `.freebuff/preview-6d50df57-e272-4769-8b12-d873a7b1e414.log`
