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

- Criar arquivo .env + .env.example

#### Instalação dotenv

```bash
  npm i dotenv
```

#### Instalação zod

```bash
  npm i zod
```

#### Instalação eslint

```bash
  npm i eslint @rocketseat/eslint-config -D
```

- Criar arquivo .eslintrc.json
- Criar arquivo .eslintignore
- no arquivo tsconfig.json alterar `"baseUrl":"./"`
- no arquivo tsconfig.json alterar `"paths": {}`

```bash
  "@/*":["./src/*"]
```

#### Instalação prisma

```bash
  npm i prisma -D
```

#### Iniciar config do prisma

```bash
  npx prisma init
```

- gerar banco de dados

```bash
  npx prisma generate
```

#### Instalação prisma client

```bash
  npm i @prisma/client
```

#### criando imagem do postgresql no docker

```bash
  docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql
```

#### rodar migrations do prisma

```bash
  npx prisma migrate dev
```
