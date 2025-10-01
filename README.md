# Taskify 🚀

> Um gerenciador de tarefas simples, intuitivo e completo, construído com as tecnologias mais modernas do ecossistema JavaScript. Este é um projeto Full-Stack desenvolvido para demonstrar habilidades em desenvolvimento de APIs seguras e interfaces de usuário reativas.

## ✨ Features

- **Autenticação Híbrida Completa:**
  - Cadastro de usuários com validação de senha forte (frontend e backend).
  - Login tradicional com e-mail/senha utilizando sistema de tokens JWT.
  - **Login social com Google (OAuth 2.0)** para uma entrada rápida e segura.
  - Verificação de e-mail com envio de link de confirmação para garantir a validade dos usuários.
  - Fluxo completo de recuperação de senha por e-mail.
- **Gerenciamento de Tarefas (CRUD):**
  - Criação, leitura, atualização e deleção de tarefas.
  - Cada tarefa é estritamente vinculada ao usuário logado.
- **Interface Reativa e Inteligente:**
  - Filtragem de tarefas em tempo real por status (`Pendente`, `Concluída`) e prioridade (`Baixa`, `Média`, `Alta`).
  - Ordenação dinâmica por data de criação, data de entrega, etc.
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
  - Passport.js (para OAuth com Google)
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
O frontend estará rodando em `http://localhost:5173` e o backend em `http://localhost:3000`.

## 👨‍💻 Autor

**Caio Caetano**

- GitHub: [@dev-caiocaetano](https://github.com/dev-caiocaetano)
- LinkedIn: [Caio Caetano](https://www.linkedin.com/in/caiohenriquecaetano/)
