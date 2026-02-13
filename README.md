# Projekt Zaliczeniowy DevOps - Sklep WSEI

### Opis projektu
Aplikacja webowa napisana w Node.js prezentująca listę produktów. 
Projekt zawiera pipeline CI/CD oraz konteneryzację.

### Jak uruchomić lokalnie:
1. `npm install`
2. `npm start`
3. Aplikacja dostępna pod: `http://localhost:3000`

### Jak uruchomić w Dockerze:
1. `docker build -t wsei-projekt-app .`
2. `docker run -p 8080:3000 wsei-projekt-app`

### Jak uruchomić testy
1. npm run test:ci

### Funkcje (Punkty):
- [x] Backlog w GitHub Projects 
- [x] Konteneryzacja 
- [x] Testy jednostkowe 
