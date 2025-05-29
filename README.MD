
# 🎮 API de Jogos Retrô

Uma API simples feita com **Fastify** que fornece informações sobre jogos clássicos e seus criadores.

## 🚀 Como usar

### 📦 Instalação

1. Clone este repositório:
```bash
git clone git@github.com:LucineiaSilvah/desafio-api-minima.git
```

2. Instale as dependências:
```bash
npm install
```

### ⚡ Scripts

- `npm run dist`: Compila os arquivos TypeScript para JavaScript no diretório `dist`.
- `npm run start:dev`: Executa o servidor em modo de desenvolvimento com variáveis de ambiente carregadas do arquivo `.env`.
- `npm run start:watch`: Executa o servidor em modo de desenvolvimento com suporte a recarregamento automático ao alterar os arquivos.
- `npm run start:dist`: Compila o projeto e executa a versão compilada a partir do diretório `dist`.

---

## 📚 Endpoints

### 🔹 Listar todos os jogos
**GET** `/jogos`

**Resposta:**
```json
{
  "jogos": [
    {
      "console": "snes",
      "jogos": [
        {
          "id": 1,
          "nome": "The Legend of Zelda: A Link to the Past",
          "descricao": "Um jogo de aventura...",
          "categoria": ["Ação", "Aventura"]
        }
      ]
    }
  ]
}
```

---

### 🔹 Listar jogos por console
**GET** `/jogos/console/:console`

**Exemplo:** `/jogos/console/snes`

**Resposta (sucesso):**
```json
{
  "game": {
    "console": "snes",
    "jogos": [
      {
        "id": 1,
        "nome": "The Legend of Zelda: A Link to the Past",
        "descricao": "Um jogo de aventura...",
        "categoria": ["Ação", "Aventura"]
      }
    ]
  }
}
```

**Resposta (erro):**
```json
{
  "message": "Game Not Found"
}
```

---

### 🔹 Listar todos os criadores
**GET** `/criadores`

**Resposta:**
```json
{
  "criadores": [
    {
      "id": 1,
      "jogo": "The Legend of Zelda: A Link to the Past",
      "criador": {
        "nome": "Shigeru Miyamoto",
        "descricao": "Designer de jogos lendário...",
        "nascimento": "1952-11-16",
        "morte": null,
        "inspiracao": "Exploração na infância..."
      }
    }
  ]
}
```

---

### 🔹 Buscar criador por nome do jogo
**GET** `/criadores/:jogo`

**Exemplo:** `/criadores/Resident Evil`

**Resposta (sucesso):**
```json
{
  "criador": {
    "id": 5,
    "jogo": "Resident Evil",
    "criador": {
      "nome": "Shinji Mikami",
      "descricao": "Diretor e designer japonês...",
      "nascimento": "1965-08-11",
      "morte": null,
      "inspiracao": "Baseado no jogo Alone in the Dark..."
    }
  }
}
```

**Resposta (erro):**
```json
{
  "message": "Driver nor found"
}
```

---

## 🔐 CORS

A API está com CORS habilitado para todos os domínios (`origin: *`) e permite apenas o método `GET`.

---

## 🛠️ Tecnologias

- [Fastify](https://www.fastify.io/)
- [Node.js](https://nodejs.org/)

---

## 📄 Licença

Este projeto está sob a licença MIT.
