/// <reference types="vitest" />
// Dzięki temu TypeScript rozpoznaje funkcje testowe jak `describe`, `it`, `expect`

import { render, screen, fireEvent } from "@testing-library/react";
// render – uruchamia komponent Reacta w wirtualnym DOM
// screen – pozwala wybierać elementy po tekscie, placeholderach itd.
// fireEvent – symuluje działania użytkownika (kliknięcia, wpisywanie)

import App from "./App"; // Import głównego komponentu aplikacji
import { describe, expect, it } from "vitest"; // Import funkcji testowych z Vitest

// Blok testowy opisujący aplikację TODO
describe("TODO App", () => {
  // Test sprawdzający dodawanie nowego zadania
  it("dodaje nowe zadanie", () => {
    render(<App />); // renderujemy aplikację w testowym środowisku DOM

    // Znajdujemy pole do wpisywania treści zadania
    const input = screen.getByPlaceholderText("Nowe zadanie...");

    // Znajdujemy przycisk „Dodaj”
    const addButton = screen.getByText("Dodaj");

    // Symulujemy wpisanie tekstu „Zrobić testy” do inputa
    fireEvent.change(input, { target: { value: "Zrobić testy" } });

    // Klikamy przycisk „Dodaj”
    fireEvent.click(addButton);

    // Sprawdzamy, czy tekst nowego zadania pojawił się na ekranie
    expect(screen.getByText("Zrobić testy")).toBeInTheDocument();
  });

  // Pusty test pod filtrację – można rozbudować
  it("filtruje zadania", () => {
    render(<App />);
    // Dodaj zadania, zaznacz zrobione, kliknij filtr „Zrobione”
    // I sprawdź, które zadania są widoczne
  });
});
