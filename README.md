[Ler em Português/Read in Portuguese](#versao-em-portugues)

# Taskify 🚀

> A simple, intuitive, and complete task manager built with a modern JavaScript ecosystem stack. This is a full-stack project developed for portfolio and study purposes, demonstrating skills in secure API development and reactive user interfaces.

## ✨ Features

- **Complete Hybrid Authentication:**
  - User registration with strong password validation (both front-end and back-end).
  - Standard email/password login using a JWT-based system.
  - **Social login via Google (OAuth 2.0)**.
  - Email verification via a confirmation link sent to the user.
  - Full password recovery flow via email.
- **Task Management (CRUD):**
  - Create, Read, Update, and Delete (CRUD) operations for tasks.
  - All tasks are securely tied to the authenticated user.
- **Reactive and Smart UI:**
  - Real-time task filtering by status (`Pending`, `Completed`) and priority (`Low`, `Medium`, `High`).
  - Dynamic sorting by creation date or due date.
  - Instant user feedback with "toast" notifications for all success and error actions.
- **Security:**
  - Backend routes are protected by JWT authentication middleware.
  - User passwords are securely hashed using `bcrypt.js`.
  - User enumeration protection on password recovery routes.

## 🚀 Tech Stack Used

This project was built using:

- **Frontend:**
  - React (with Vite)
  - React Router DOM
  - React Hot Toast
  - Validator.js
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ORM)
  - JSON Web Token (JWT)
  - **Passport.js (for Google OAuth)**
  - Nodemailer
  - Bcrypt.js
  - Cors
- **Tooling:**
  - Git & GitHub
  - VSCode

## ⚙️ How to Run Locally

Follow the steps below to run this project on your local machine.

```bash
# 1. Clone this repository
git clone [https://github.com/dev-caiocaetano/taskify-fullstack.git](https://github.com/dev-caiocaetano/taskify-fullstack.git)

# 2. Navigate to the project folder
cd taskify-fullstack

# --- Backend Setup ---

# 3. Navigate to the backend folder
cd backend

# 4. Install dependencies
npm install

# 5. Create a .env file in the 'backend' root
# and add the following environment variables:
# CONNECTION_STRING=YourMongoDBConnectionString
# JWT_SECRET_KEY=YourJWTSecretKey
# SESSION_SECRET=YourSessionSecretKey
# EMAIL_USER=YourGmailAddress
# EMAIL_PASS=YourGmailAppPassword
# GOOGLE_CLIENT_ID=YourGoogleCloudClientID
# GOOGLE_CLIENT_SECRET_KEY=YourGoogleCloudClientSecret

# 6. Start the backend server
npm run dev

# --- Frontend Setup ---

# 7. In a NEW terminal, navigate to the frontend folder
# from the project root
cd frontend

# 8. Install dependencies
npm install

# 9. Start the React application
npm run dev
```
The frontend will be running on `http://localhost:5173` and the backend on `http://localhost:3000`.

## 👨‍💻 Author

**Caio Caetano**

- GitHub: [@dev-caiocaetano](https://github.com/dev-caiocaetano)
- LinkedIn: [Caio Caetano](https://www.linkedin.com/in/caiohenriquecaetano/)

---
<br>
#versao-em-portugues

# Taskify 🚀


> Um gerenciador de tarefas simples, intuitivo e completo, construído com as tecnologias mais modernas do ecossistema JavaScript. Este é um projeto Full-Stack desenvolvido para demonstrar habilidades em desenvolvimento de APIs seguras e interfaces de usuário reativas.

## ✨ Features

- **Autenticação Híbrida Completa:**
  - Cadastro de usuários com validação de senha forte (frontend e backend).
  - Login tradicional com e-mail/senha utilizando sistema de tokens JWT.
  - **Login social com Google (OAuth 2.0)**.
  - Verificação de e-mail com envio de link de confirmação.
  - Fluxo completo de recuperação de senha.
- **Gerenciamento de Tarefas (CRUD):**
  - Criação, leitura, atualização e deleção de tarefas.
  - Cada tarefa é estritamente vinculada ao usuário logado.
- **Interface Reativa e Inteligente:**
  - Filtragem de tarefas em tempo real por status (`Pendente`, `Concluída`) e prioridade (`Baixa`, `Média`, `Alta`).
  - Ordenação dinâmica por data de criação ou data de entrega.
  - Feedback instantâneo ao usuário com notificações "toast" para todas as ações e erros.
- **Segurança:**
  - Rotas do backend protegidas por middleware de autenticação JWT.
  - Senhas de usuário criptografadas no banco de dados com `bcrypt.js`.
  - Proteção contra enumeração de usuários nas rotas de recuperação de senha.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando:

- **Frontend:**
  - React (com Vite)
  - React Router DOM
  - React Hot Toast
  - Validator.js
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (com Mongoose ORM)
  - JSON Web Token (JWT)
  - **Passport.js (para OAuth com Google)**
  - Nodemailer
  - Bcrypt.js
  - Cors
- **Ferramentas:**
  - Git & GitHub
  - VSCode

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto na sua máquina.

```bash
# 1. Clone este repositório
git clone [https://github.com/dev-caiocaetano/taskify-fullstack.git](https://github.com/dev-caiocaetano/taskify-fullstack.git)

# 2. Navegue para a pasta do projeto
cd taskify-fullstack

# --- Configuração do Backend ---

# 3. Navegue para a pasta do backend
cd backend

# 4. Instale as dependências
npm install

# 5. Crie um arquivo .env na raiz da pasta 'backend'
# e adicione as seguintes variáveis de ambiente:
# CONNECTION_STRING=SuaStringDeConexaoComOMongoDB
# JWT_SECRET_KEY=SuaChaveSecretaParaOJWT
# SESSION_SECRET=SuaChaveSecretaParaOSession
# EMAIL_USER=SeuEmailDoGmail
# EMAIL_PASS=SuaSenhaDeAppDoGmail
# GOOGLE_CLIENT_ID=SeuClientIDDoGoogleCloud
# GOOGLE_CLIENT_SECRET_KEY=SeuClientSecretDoGoogleCloud

# 6. Inicie o servidor do backend
npm run dev

# --- Configuração do Frontend ---

# 7. Em um NOVO terminal, navegue de volta para a raiz e entre na pasta do frontend
# cd ../frontend (a partir da pasta backend)
cd frontend

# 8. Instale as dependências
npm install

# 9. Inicie a aplicação React
npm run dev
```

## 👨‍💻 Autor

**Caio Caetano**

- GitHub: [@dev-caiocaetano](https://github.com/dev-caiocaetano)
- LinkedIn: [Caio Caetano](https://www.linkedin.com/in/caiohenriquecaetano/)
