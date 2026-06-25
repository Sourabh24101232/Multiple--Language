# 🌍 Multi-Language Website using React + i18next

A simple React project demonstrating how to add **multiple language support** to a website using **i18next** and **react-i18next**.

This project helped me understand how internationalization (i18n) works in React applications, including language switching, browser language detection, and loading translations dynamically.

---

## 🚀 Features

- 🌐 Supports multiple languages
- 🔄 Switch language without reloading the page
- 🌍 Automatic browser language detection
- 📂 Translation files loaded dynamically
- 📝 Easy to add new languages
- ↔️ RTL (Right-to-Left) support for Arabic
- ⚛️ Built with React and Vite

---

## 🛠️ Tech Stack

- React
- Vite
- i18next
- react-i18next
- i18next-browser-languagedetector
- i18next-http-backend

---

## 📁 Project Structure

```
src/
│── components/
│   └── LanguageSelector.jsx
│
│── i18n.js
│── App.jsx
│── main.jsx
│
public/
└── locales/
    ├── en/
    │   └── translation.json
    ├── hi/
    │   └── translation.json
    ├── fr/
    │   └── translation.json
    └── ar/
        └── translation.json
```

---

## 🌐 Supported Languages

- 🇺🇸 English
- 🇮🇳 Hindi
- 🇫🇷 French
- 🇸🇦 Arabic (RTL Support)

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/multi-language.git
```

Go to the project folder

```bash
cd multi-language
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📚 What I Learned

- Setting up **i18next** in a React project
- Using **react-i18next** hooks (`useTranslation`)
- Browser language detection
- Dynamic language switching
- Organizing translation files
- Loading translations using `i18next-http-backend`
- Implementing RTL support for Arabic using `i18n.dir()`
- Writing reusable translation keys instead of hardcoded text

---


## 📄 Dependencies

```json
react
react-dom
i18next
react-i18next
i18next-browser-languagedetector
i18next-http-backend
vite
```

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements.

---

## ⭐ If you found this project useful, consider giving it a star!
