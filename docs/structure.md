walk-talkie/
├── backend/
│ ├── src/
│ │ ├── app/ # Lógica principal da aplicação
│ │ │ ├── models/ # Modelos de dados (domínio)
│ │ │ │ ├── User.js
│ │ │ │ └── CallSession.js
│ │ │ ├── routes/ # Definição de rotas Express
│ │ │ │ └── userRoutes.js
│ │ │ ├── controllers/ # Lógica de controle entre rotas e serviços
│ │ │ ├── services/ # Regras de negócio, lógica de aplicação
│ │ │ ├── middlewares/ # Middlewares Express
│ │ │ └── utils/ # Funções auxiliares genéricas
│ │ ├── infra/ # Infraestrutura de DB, redis, filas, etc.
│ │ │ ├── database.js
│ │ │ └── webRTC.js
│ │ ├── config/ # Configurações centralizadas (env, constantes)
│ │ ├── index.js # Ponto de entrada do servidor
│ ├── prisma/
│ │ ├── schema.prisma
│ │ └── migrations/
│ ├── tests/ # Testes automatizados do backend
│ └── README.md
│
├── frontend/
│ ├── app/ # Telas e rotas (expo-router)
│ │ ├── (tabs)/ # Abas visuais (Home, Explore, etc.)
│ │ └── auth/ # Seções específicas (ex: login)
│ ├── assets/ # Imagens e fontes
│ ├── components/ # Componentes reutilizáveis
│ ├── constants/ # Temas, cores, strings
│ ├── hooks/ # Hooks customizados
│ ├── services/ # Requisições HTTP, API Client
│ ├── config/ # Configurações (env, rotas, tema)
│ ├── tests/ # Testes unitários e de componentes
│ └── README.md
│
├── docs/ # Documentação técnica do projeto
│ ├── structure.md # Estrutura de pastas
│ ├── roadmap.md # Planejamento por etapas
│ └── decisions.md # Decisões arquiteturais tomadas
│
├── .editorconfig
├── .prettierrc
├── .gitignore
├── LICENSE
├── README.md
└── docker-compose.yml # Ambiente local com banco e backend

Camada Benefício técnico
app/models/ Foco em domínio e entidades
app/services/ Clareza da lógica central sem misturar com controle HTTP
app/controllers/ Orquestração entre entrada/saída e lógica de negócio
infra/ Isola a infraestrutura (como DB, Redis, WebRTC...)
tests/ Local claro para evolução de testes
config/ Centraliza .env, conexões e variáveis
docs/ Melhora a comunicação com quem entra no projeto
