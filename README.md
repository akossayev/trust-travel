# TrustTravel Monorepo

TrustTravel — высоконагруженная платформа для организации туров в Казахстане.

## 📂 Структура проекта

```plaintext
trust-travel/
├── apps/
│   ├── backend/                    # Бэкенд сервисы
│   │   ├── analytics-service/      # Аналитика (Rust)
│   │   ├── api-gateway/            # API Gateway (Go)
│   │   ├── auth-service/           # Аутентификация (NestJS)
│   │   ├── booking-service/        # Бронирование (Go)
│   │   ├── notification-service/   # Уведомления (NestJS)
│   │   ├── payment-service/        # Платежи (Go)
│   │   ├── tour-service/           # Сервис туров (Go)
│   ├── frontend/                   # Фронтенд
│   │   ├── admin-dashboard/        # Админка (Next.js + NestJS)
│   │   ├── analytics-dashboard/    # Аналитика (Next.js + Rust)
│   │   ├── client-landing/         # Клиентская часть (Next.js + NestJS + Go)
├── infra/                          # Инфраструктура (Kubernetes, Helm, Terraform, Docker)
├── node_modules/                   # Зависимости
├── packages/                       # Общие пакеты
│   ├── eslint-config/              # Конфиг ESLint
│   ├── typescript-config/          # Конфиг TypeScript
├── .gitignore
├── .npmrc
├── package.json
├── README.md
├── turbo.json                   # Конфигурация Turborepo
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
```

## 🚀 Технологический стек

| Раздел            | Технологии |
|------------------|------------|
| **Frontend**     | Next.js |
| **Backend**      | NestJS, Go, Rust |
| **База данных**  | PostgreSQL, Redis |
| **Очереди**      | Kafka, RabbitMQ |
| **Хранилище**    | AWS S3 |
| **Мониторинг**   | Prometheus, Grafana |
| **Оркестрация**  | Kubernetes |
| **CI/CD**        | TurboRepo, Helm |

## 📌 Установка и запуск

1. Установите зависимости:
   ```sh
   pnpm install
   ```

2. Установите зависимости:
   ```sh
   npm install -g turbo
   ```
   
3. Запустите разработку:
   ```sh
   turbo dev
   ```

