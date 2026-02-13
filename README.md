# Sklep Internetowy - Projekt DevOps WSEI

Projekt zaliczeniowy prezentujący pełny cykl życia aplikacji (CI/CD), konteneryzację oraz integrację z chmurowymi bazami danych.

## Linki
- **Aplikacja Live:** devops-project-production-3a44.up.railway.app
- **Baza danych:** Supabase 

---

## Technologie
- **Backend:** Node.js
- **Frontend:** HTML5, CSS3, JavaScript
- **Baza danych:** Supabase
- **Konteneryzacja:** Docker
- **CI/CD:** GitHub Actions + Railway

---

## Realizacja punktów

### 1. Zarządzanie projektem 
- **Backlog:** Wykorzystano GitHub Projects do planowania zadań.
- **Git Flow:** Praca na branchach (np. `feature/Shop`), wykorzystanie Pull Requestów oraz powiązanie commitów.

### 2. Aplikacja i Testy 
- **API:** Implementacja endpointów.
- **Testy:** Testy jednostkowe napisane w frameworku.
- **Raporty:** Automatyczne generowanie raportów (`junit.xml`) podczas każdego przebiegu Pipeline'u.

### 3. CI/CD i Konteneryzacja 
- **Docker:** Stworzono `Dockerfile'. Aplikacja jest skonteneryzowana.
- **GitHub Actions (CI):** Automatyczny build i testy przy każdym Pull Requeście. Raporty z testów są zapisywane.
- **Railway (CD):** Automatyczne wdrożenie po zmergowaniu zmian do gałęzi `main`.

### 4. Bezpieczeństwo i Sekrety (Pkt 11)
- **Zmienne środowiskowe:** Wykorzystanie `process.env` oraz biblioteki `dotenv`.
- **Sekrety:** Wrażliwe dane (klucze Supabase) przechowywane w **GitHub Secrets** oraz **Railway Variables**.
