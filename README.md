Aqui está um **README.md detalhado** que você pode usar no GitHub para o seu microserviço de autenticação:

---

# 🔐 Auth Microservice — JWT + OAuth2 (Node.js + Express)

Microserviço de autenticação seguro e reutilizável, implementado com **JWT** e **OAuth2 (Google)**.
Inclui suporte a **tokens de acesso e refresh**, integração com **Prisma + PostgreSQL**, pronto para rodar em **Docker**.

Ideal para ser integrado em outros sistemas que precisem de autenticação centralizada.

---

## 🚀 Funcionalidades

* Registro e login de usuários com email e senha (hash com **bcrypt**)
* Autenticação com **Google OAuth2** via `passport-google-oauth20`
* Geração e renovação de **JWTs**
* Refresh tokens armazenados no banco (segurança extra)
* Middleware de proteção de rotas
* Arquitetura modular e reutilizável
* Configuração pronta para **Docker**

---

## 🏗️ Arquitetura

```
auth-microservice/
│── prisma/              # Configuração do Prisma ORM
│   └── schema.prisma
│── src/
│   ├── index.js         # Entry point
│   ├── app.js           # Configuração do Express
│   ├── prisma.js        # Cliente Prisma
│   ├── routes/
│   │   └── auth.js      # Rotas de autenticação
│   ├── controllers/     # Regras de negócio
│   ├── services/
│   │   ├── jwt.js       # Geração/validação de JWT
│   │   └── passport.js  # Estratégias OAuth2
│── .env.example         # Variáveis de ambiente
│── package.json
│── Dockerfile
│── docker-compose.yml
│── README.md
```

---

## ⚙️ Pré-requisitos

* [Node.js 18+](https://nodejs.org)
* [PostgreSQL 15+](https://www.postgresql.org/)
* [Docker](https://www.docker.com/) (opcional, mas recomendado)

---

## 📥 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seuusuario/auth-microservice.git
cd auth-microservice
npm install
```

Crie o arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

Ajuste as variáveis de ambiente (como `DATABASE_URL`, `JWT_SECRET`, `GOOGLE_CLIENT_ID`, etc).

---

## 🛠️ Banco de Dados

Rodar as migrações do Prisma:

```bash
npx prisma migrate dev
```

---

## ▶️ Uso (Modo Dev)

Inicie o servidor local:

```bash
npm run dev
```

O serviço ficará disponível em:
👉 `http://localhost:4000`

---

## 🐳 Uso com Docker

Subir o serviço com Postgres + App:

```bash
docker-compose up --build
```

---

## 🔑 Rotas Principais

### `POST /auth/register`

Registra novo usuário.
Body:

```json
{
  "email": "user@email.com",
  "password": "123456",
  "name": "Usuário Teste"
}
```

### `POST /auth/login`

Autentica usuário com email e senha.
Retorna **access token** e **refresh token**.

### `POST /auth/refresh`

Gera novo access token a partir do refresh token.

### `GET /auth/google`

Redireciona para login com Google OAuth2.

### `GET /auth/google/callback`

Callback do Google.

---

## 🔒 Protegendo Rotas

Exemplo de rota protegida no Express:

```js
const { verifyToken } = require('./services/jwt');

app.get('/profile', verifyToken, (req, res) => {
  res.json({ user: req.user });
});
```

---

## 📸 Prints (exemplo)

* ✅ Registro/Login
* ✅ Tokens JWT gerados
* ✅ Integração com Google OAuth2

*(adicione suas screenshots aqui)*

---

## 🧩 Futuras Melhorias

* Suporte a Facebook/GitHub OAuth
* Integração com Redis para blacklist de tokens
* Painel de administração

---

## 📄 Licença

Projeto sob licença **MIT**. Livre para uso e modificação.

---

Quer que eu já gere as **screenshots simuladas em formato PNG** (fluxo de login, tokens no Postman, diagrama da arquitetura) para você adicionar direto no README?
