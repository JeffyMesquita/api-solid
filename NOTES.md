#### Start project

```bash
  npm i typescript @types/node tsx tsup -D
```

#### tsconfig

```bash
  npx tsc --init 
```

- Mudar o "target" para "es2020"

#### Instalação do fastify

```bash
  npm i fastify
```

- Criar arquivo .gitignore.
- Criar scripts no package.json

```bash
  "start:dev": "tsx watch src/server.ts",
  "start":"node build/server.js",
  "build":"tsup src --out-dir build"
```

- Criar arquivo .npmrc

```bash
  save-exact=true
```