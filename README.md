# 📝 TODO App – React + TypeScript

Aplikacja typu TODO do zarządzania zadaniami dziennymi. Prosta, szybka i zapamiętuje dane automatycznie w przeglądarce dzięki `localStorage`.

---

## 🚀 Funkcje

- ✅ Dodawanie zadań
- ✅ Zaznaczanie jako zrobione
- ✅ Edycja zadań
- ✅ Usuwanie zadań
- ✅ Filtrowanie: wszystkie / aktywne / zrobione
- ✅ Licznik zadań
- ✅ Zapis w localStorage (brak utraty po odświeżeniu strony)
- ✅ Responsywny wygląd (na komputerze i telefonie)

---

## 🧑‍💻 Jak korzystać?

### 1. Dodawanie zadania

- Wpisz tekst zadania w polu u góry
- Kliknij **„Dodaj”** lub naciśnij `Enter`

### 2. Zaznaczenie jako zrobione

- Kliknij **checkbox** obok zadania – zostanie przekreślone

### 3. Edycja

- Kliknij ✏️, wpisz nowy tekst i zatwierdź klikając 💾 lub `Enter`

### 4. Usuwanie

- Kliknij 🗑️ obok zadania, aby je usunąć

### 5. Filtrowanie

- Kliknij **Wszystkie / Aktywne / Zrobione** u góry listy

### 6. Licznik

- Poniżej filtrów znajduje się informacja, ile zadań jest otwartych

---

## 🧪 Testowanie

Projekt zawiera przykładowe testy jednostkowe (`App.test.tsx`) wykonane z użyciem **Vitest** i **@testing-library/react**.

### Uruchom testy:

```bash
npm run test
```

# Uruchomienie aplikacji lokalnie

git clone https://github.com/twoj-uzytkownik/todo-app.git
cd todo-app
npm install
npm run dev

## 📂 Struktura

todo-app/
├── src/
│ ├── App.tsx # główny komponent aplikacji
│ ├── App.css # stylizacja
│ ├── App.test.tsx # testy jednostkowe
│ └── setupTests.ts # konfiguracja do vitest
├── vite.config.ts # konfiguracja Vite + Vitest
└── README.md # ten plik

---

Autor: Artur Lewandowski
