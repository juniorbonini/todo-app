#📋 Ascending Time Forge — Frontend
Aplicação mobile de gerenciamento de tarefas desenvolvida com React Native, Expo e TypeScript.
O projeto nasceu como um desafio simples de tarefas e está evoluindo para uma plataforma completa com autenticação, perfil de usuário, estatísticas e múltiplas telas — sempre com foco em arquitetura limpa, componentização e boas práticas de mercado.

O nome não é por acaso: o app é sobre disciplina, constância e crescimento — e o próprio desenvolvimento dele segue esse mesmo princípio.


##🚀 Tecnologias

React Native
Expo
TypeScript
Axios
Expo Secure Store
Expo Vector Icons
Expo Google Fonts (Inter)
Git & GitHub


##✅ Funcionalidades implementadas

Criar, concluir e remover tarefas
Contadores dinâmicos de tarefas criadas e concluídas
Estado vazio com feedback visual
Interface estilizada com tokens de cor e tipografia
Tela de autenticação (Login e Registro) estruturada
Formulários com validação via schemas (Login e Register)
Contexto de autenticação com AuthContext
Navegação entre telas com roteamento estruturado
GenderPicker para seleção de gênero no cadastro
Modal de criação de tarefas (NewTaskModal)
TabSwitcher para alternância entre abas
Tratamento de erros de API com AxiosErrorInterface
Utilitários de formatação: calculateAge e formatBirthDate
Gradiente visual com gradient-linear


##🔐 Próximas implementações

 Integração completa Login/Register com a API
 Persistência de token com Expo Secure Store
 Tela de estatísticas do usuário (UserStatics)
 Sistema de gamificação (XP e progresso)
 Melhorias de UX e acessibilidade


##🧠 Arquitetura
O projeto passou por uma refatoração completa antes de seguir para as novas funcionalidades, aplicando:

Custom hooks — lógica extraída para useTasks, SignInForm, SignUpForm
Componentização — cada componente com responsabilidade única
Separação de camadas — UI, lógica, estilos e tipagens em camadas distintas
Tokens visuais — cores e fontes centralizadas em Color.ts e Fontfamily.ts
Interfaces TypeScript — tipagem forte em todo o projeto
Schemas de validação — Login e Register com validação estruturada
Context API — gerenciamento de estado de autenticação com AuthContext


##🧩 Componentes principais
ComponenteResponsabilidadeContainerCor de fundo e padding horizontalHeaderLogo e identidade visual do appHeroSeção de destaque / boas-vindasFormInput controlado + botão de criaçãoFormSignInFormulário de loginFormSignUpFormulário de cadastroGenderPickerSeleção de gênero no cadastroNewTaskModalModal de criação de tarefasTabSwitcherAlternância entre abasTaskItemRenderização individual de tarefaSummaryContadores de criadas e concluídasEmptyEstado visual sem tarefasLoadingTela de carregamento de fontesIconÍcones reutilizáveis

##🪝 Hooks
HookResponsabilidadeuseTasksEstado e operações da lista de tarefas (add, toggle, remove)SignInFormLógica e estado do formulário de loginSignUpFormLógica e estado do formulário de cadastro

##🖥️ Telas
TelaDescriçãoAuthTela de autenticação (Login / Registro)HomeTela principal com lista de tarefas

##📁 Estrutura de pastas
src/
├── app/
│   └── App.tsx
├── assets/
├── components/
│   ├── Button/
│   ├── Container/
│   ├── Empty/
│   ├── FormSignIn/
│   ├── FormSignUp/
│   ├── GenderPicker/
│   ├── Header/
│   ├── Hero/
│   ├── Icon/
│   ├── Input/
│   ├── Loading/
│   ├── NewTaskModal/
│   ├── Summary/
│   ├── TabSwitcher/
│   └── Task/
├── contexts/
│   └── AuthContext/
├── hooks/
│   ├── SignInForm/
│   ├── SignUpForm/
│   └── Tasks/
│       └── useTasks.ts
├── routes/
│   └── index.tsx
├── schemas/
│   ├── Login/
│   └── Register/
├── screens/
│   ├── Auth/
│   └── Home/
├── services/
│   └── api.ts
├── style/
│   ├── Color.ts
│   ├── Fontfamily.ts
│   └── Global.ts
└── utils/
    ├── AxiosErrorInterface/
    ├── calculateAge/
    ├── formatBirthDate/
    └── gradient-linear.ts

##▶️ Como executar
bashnpm install
npx expo start

##👨‍💻 Autor
Desenvolvido por Junior Bonini
Projeto iniciado como desafio da Rocketseat e expandido como portfólio profissional com foco em arquitetura mobile real.
