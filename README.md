📋 Tasks App

Aplicação mobile de gerenciamento de tarefas desenvolvida com React Native, Expo e TypeScript, com foco em organização de estado, componentização, boas práticas de layout e tipagem.

O projeto permite criar, concluir e remover tarefas, exibindo contadores dinâmicos e uma interface simples.

🚀 Tecnologias utilizadas

React Native

Expo

TypeScript

Expo Vector Icons

Expo Google Fonts (Inter)

FlatList

StyleSheet

Git & GitHub

🎯 Funcionalidades

➕ Criar novas tarefas

✅ Marcar e desmarcar tarefas como concluídas

🗑️ Remover tarefas

📊 Contadores dinâmicos de tarefas criadas e concluídas

📌 Ordenação automática:

Tarefas pendentes no topo

Tarefas concluídas ao final da lista

🧩 Componentização e tipagem forte

🎨 Interface estilizada e responsiva

📭 Estado vazio com feedback visual

🧠 Arquitetura e conceitos aplicados

Estado centralizado na tela Home

Componentes reutilizáveis e desacoplados

Tipos e enums bem definidos

Imutabilidade de estado

Separação clara entre:

UI

Lógica

Estilos

Tipagens

Padronização visual por tokens de estilo

📁 Estrutura de pastas
├── .expo/                  # Configurações internas do Expo
├── assets/                 # Assets globais do projeto
├── ios/                    # Configurações específicas para iOS
├── node_modules/           # Dependências do projeto
├── src/
│   ├── @types/             # Tipagens globais da aplicação
│   │   └── types.ts
│   │
│   ├── app/
│   │   └── App.tsx         # Entry point da aplicação
│   │
│   ├── assets/
│   │   └── todo-logo.png   # Logo do app
│   │
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Empty/
│   │   ├── Input/
│   │   ├── Loading/
│   │   ├── Summary/
│   │   └── Task/
│   │
│   ├── screens/
│   │   └── Home.tsx        # Tela principal do app
│   │
│   ├── style/              # Estilos globais e tokens visuais
│   │   ├── Color.ts
│   │   ├── Fontfamily.ts
│   │   ├── Global.ts
│   │   └── style.ts
│   │
│   ├── utils/
│   │   └── TasksTypes.ts   # Enum para tipos de tasks (Criadas / Concluídas)
│
├── .gitignore
├── app.json
├── index.ts
├── package.json
├── package-lock.json
└── tsconfig.json

🧩 Componentes principais
🔹 Home

Tela principal da aplicação

Centraliza o estado das tarefas

Controla criação, conclusão e remoção

Renderiza contadores, lista e estado vazio

🔹 Task

Representa uma tarefa individual

Exibe descrição, estado e botão de remoção

Aplica estilos condicionais (concluída / pendente)

🔹 Summary

Exibe contadores de tarefas

Diferencia visualmente “Criadas” e “Concluídas”

🔹 Input

Campo controlado para descrição da tarefa

Feedback visual de foco

🔹 Button

Botão de ação para criar novas tarefas

🔹 Empty

Estado visual quando não há tarefas cadastradas

📌 Propósito do projeto

Este projeto foi desenvolvido com o objetivo de:

Consolidar conceitos de React Native

Praticar TypeScript aplicado ao frontend

Exercitar componentização e organização de pastas

Criar um projeto limpo, escalável e apresentável para portfólio

Simular um fluxo real de desenvolvimento mobile

▶️ Como executar o projeto
# Instalar dependências
npm install

# Iniciar o projeto
npx expo start

👨‍💻 Autor

Desenvolvido por Junior Bonini (Projeto desafio da Rocketseat)
Projeto voltado para aprendizado, prática e portfólio profissional.
