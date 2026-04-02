# 📋 Tasks App

Aplicação mobile de gerenciamento de tarefas desenvolvida com **React Native**, **Expo** e **TypeScript**.

O projeto nasceu como um app simples de tarefas e está evoluindo para uma plataforma completa com autenticação, estatísticas de uso e múltiplas telas — sempre com foco em arquitetura limpa, componentização e boas práticas.

---

## 🚀 Tecnologias

- React Native
- Expo
- TypeScript
- Axios
- Expo Secure Store
- Expo Vector Icons
- Expo Google Fonts (Inter)
- Git & GitHub

---

## ✅ Funcionalidades implementadas

- Criar, concluir e remover tarefas
- Contadores dinâmicos de tarefas criadas e concluídas
- Estado vazio com feedback visual
- Interface estilizada com tokens de cor e tipografia

---

## 🔐 Em desenvolvimento

- [ ] Autenticação — Login e Register com integração à API
- [ ] Persistência de token com Expo Secure Store
- [ ] Tela de estatísticas do usuário (UserStatics)
- [ ] Navegação entre telas
- [ ] Melhorias de UX e acessibilidade

---

## 🧠 Arquitetura

O projeto passou por uma refatoração completa antes de seguir para as novas funcionalidades, aplicando:

- **Custom hooks** — lógica de tarefas extraída para `useTasks`
- **Componentização** — cada componente com responsabilidade única
- **Separação de camadas** — UI, lógica, estilos e tipagens em camadas distintas
- **Tokens visuais** — cores e fontes centralizadas em `Color.ts` e `Fontfamily.ts`
- **Interfaces TypeScript** — tipagem forte em todo o projeto

---

## 🧩 Componentes principais

| Componente | Responsabilidade |
|---|---|
| `Container` | Cor de fundo e padding horizontal |
| `Header` | Logo e identidade visual do app |
| `Form` | Input controlado + botão de criação |
| `TaskItem` | Renderização individual de tarefa |
| `TasksSummary` | Contadores de criadas e concluídas |
| `Empty` | Estado visual sem tarefas |
| `Loading` | Tela de carregamento de fontes |

---

## 🪝 Hooks

| Hook | Responsabilidade |
|---|---|
| `useTasks` | Estado e operações da lista de tarefas (add, toggle, remove) |

---

## 📁 Estrutura de pastas

```
src/
├── app/
│   └── App.tsx
├── assets/
├── components/
│   ├── Button/
│   ├── Container/
│   ├── Empty/
│   ├── Form/
│   ├── Header/
│   ├── Input/
│   ├── Loading/
│   ├── ScreenWrapper/
│   ├── Task/
│   └── TasksSummary/
├── hooks/
│   └── useTasks.ts
├── interfaces/
├── screens/
│   └── Home.tsx
├── style/
│   ├── Color.ts
│   ├── Fontfamily.ts
```

---

## ▶️ Como executar

```bash
npm install
npx expo start
```

---

## 👨‍💻 Autor

Desenvolvido por **Junior Bonini**  
Projeto iniciado como desafio da Rocketseat e expandido como portfólio profissional.
