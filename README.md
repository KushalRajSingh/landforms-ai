# 🌍 Landforms AI

A Class 11 Geography AI study assistant that answers questions about the **Landforms** chapter using Retrieval-Augmented Generation (RAG).

## 🚀 Features

- 📚 Answers questions from the provided Geography study material
- 🤖 AI-powered question answering
- 🔎 Retrieves relevant information from the PDF
- 💬 Simple student-friendly responses
- 🌐 HTML/CSS/JavaScript frontend
- ⚡ FastAPI backend
- ☁️ Google Colab-based backend

## 🛠️ Tech Stack

- Python
- FastAPI
- LangChain
- Vector Database
- LLM
- HTML
- CSS
- JavaScript
- Google Colab

## 📁 Project Structure

```text
landforms-ai/
│
├── frontend/
│   ├── index.html
│   ├── bot.css
│   └── app.js
│
├── backend/
│   └── Untitled2.ipynb
│
├── README.md
└── .gitignore
```

## 💡 How It Works

1. The Geography study material is loaded into the backend.
2. The content is divided into smaller chunks.
3. The chunks are converted into embeddings.
4. Relevant chunks are retrieved when a student asks a question.
5. The retrieved content is provided to the language model.
6. The AI generates a student-friendly answer based on the retrieved material.

## 🎯 Project Goal

The goal of this project is to explore how RAG-based AI systems can be used to create educational tools that help students understand their study material.

## 👨‍💻 Author

Built as a learning project while exploring AI, RAG, Python, and web development.
