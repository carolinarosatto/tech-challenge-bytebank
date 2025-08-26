# 📊 Tech Challenge - Fase 1 - Front-end Engineering

Aplicação desenvolvida em **Next.js** como parte do projeto de pós-graduação, com foco em **POO** e **princípios SOLID**.  
O sistema possui uma primeira página de apresentação, e uma área onde são apresentadas transações financeiras e uma simulação de CRUD de transações. Atualmente, os dados são mockados, focando no layout.

---

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) – Framework React para aplicações web modernas
- [React](https://react.dev/) – Biblioteca para criação de interfaces
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática para JavaScript
- [Sass/SCSS](https://sass-lang.com/) – Estilização com pré-processador CSS
- [ESLint](https://eslint.org/) – Padronização e análise de código
- Outras bibliotecas:
- [MUI Icons](https://mui.com/material-ui/material-icons) - Ícones para composição do layout
- [react-responsive](https://www.npmjs.com/package/react-responsive) - Facilita a manipulação do DOM usando queries diretamente no ts.

---

## 📂 Estrutura do projeto

```
├── app/                 # Páginas e rotas do Next.js
     ├── home/                 # Página de transações
     ├── login/                # Página inicial
├── components/          # Componentes reutilizáveis
├── models/              # Classes e interfaces (POO/SOLID)
├── data/                # Mocks e consumo de dados
├── styles/              # Estilos globais, tokens e mixins reutilizáveis
├── utils/               # Funções utilitárias
└── package.json         # Configuração do projeto
```

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) **versão 18 ou superior**
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 📥 Instalação e execução no ambiente de desenvolvimento

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/carolinarosatto/tech-challenge-bytebank.git
   ```

2. **Entrar na pasta do projeto**

   ```bash
   cd tech-challenge-bytebank
   ```

3. **Instalar as dependências**

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn
   ```

4. **Rodar o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

5. **Acessar no navegador**
   ```
   http://localhost:3000
   ```

---

## 📝 Boas práticas adotadas

- Estrutura baseada em **POO** e **princípios SOLID**
- Componentes desacoplados e reutilizáveis
- Tipagem estática com **TypeScript**
- Organização modular de estilos com **SCSS Modules**
- Separação clara de responsabilidades

---

## 📌 Observações

- O projeto utiliza **dados mockados** (sem backend).
- Pode ser facilmente integrado a uma API real futuramente.
