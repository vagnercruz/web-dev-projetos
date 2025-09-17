## 📝 To-Do List Angular

🔹 **Descrição**

Uma aplicação de lista de tarefas simples, moderna e estilizada com **Angular 18+**, **SCSS** e **Bootstrap**. Permite adicionar, completar e remover tarefas de forma prática.

---

### 🎯 Funcionalidades
- Adicionar tarefas.
- Marcar como concluídas.
- Excluir tarefas.
- Layout moderno com animações suaves
- Responsivo e prático

---

### 🛠 Tecnologias usadas
- Angular 18+ (standalones camponents)
- SCSS
- Bootstrap v5.3
- Bootstrap icons

---

### 💻 Instalação e execução

1. Clone o repositório:

``` bash
git clone <seu-repositorio-url>
cd todo-list-angular
```

2. Instale as dependências:

``` bash
npm install
```

3. Rode a aplicação:

``` bash
ng serve
```

4. Abra no navegador:

``` arduino
http://localhost:4200
```
---

### 📂 Estrutura do projeto

``` css
src/
│
├── app/
│   ├── components/
│   │   └── todo/
│   │       ├── todo.component.ts
│   │       ├── todo.html
│   │       └── todo.scss
│   └── app.ts
│
├── styles.scss  <- imports do Bootstrap e estilos globais
└── main.ts
```

---

### ⚡ Notas

- Certifique-se de que o **Bootstrap** e os **Bootstrap Icons** estão instalados:

``` bash
npm install bootstrap bootstrap-icons
```

- No `styles.scss`:

``` sccs
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons/font/bootstrap-icons.css";
```

- Os estilos do `todo.scss` aplicam bordas arredondadas, sombras, hover animado e checkboxes maiores para melhor UX.

---

### 🎨 Personalização

Você pode mudar cores, fontes ou animações diretamente no `todo.scss`. Também é fácil adicionar filtros ou salvar tarefas no **localStorage** para persistência.

---