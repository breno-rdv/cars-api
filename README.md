# Inventory service

> This project follows Clan Architecture

It is responsible for:

- Manages the complete vehicle lifecycle (creation, updates, deleting)
- Handles vehicle metadata (specifications, features, pricing)
- Provides search indexing capabilities
- Implements business rules for inventory management
- Manages vehicle status (available, reserved, sold)

# Running project locallly

```bash
npm run start:dev
```

# Clean Architecture Implementation

This project follows Clean Architecture principles to maintain a scalable, testable, and maintainable codebase.

## Architecture Layers

The application is divided into four main layers, from innermost to outermost:

### 1. Domain Layer (`src/domain/`)

Contains enterprise business rules and entities. This layer is independent of all other layers.

### 2. Application Layer (`src/application/`)

Contains use cases and application-specific business rules.

### 3. Infrastructure Layer (`src/infrastructure/`)

Contains external integrations and framework-specific code.

### 4. Presentation Layer (`src/presentation/`)

Handles HTTP requests and responses, contains controllers and route definitions.

## Key Principles

1. **Dependency Rule**: Dependencies only point inward. Inner layers don't know about outer layers.
2. **Independence**: Domain layer is independent of frameworks and external concerns.
3. **Abstraction**: Inner layers define interfaces that outer layers must implement.

## Example Flow

1. User sends HTTP request to API
2. Presentation layer routes request to appropriate controller
3. Controller validates input and calls corresponding use case
4. Use case implements business rules and orchestrates flow
5. Application service orchestrates use cases
6. Domain entities represent business data
7. Repository defines persistence contract
8. Database/API/File system implements repository

## Project Structure

```
src/
├── domain/ # Business rules and entities
├── application/ # Use cases and application logic
├── infrastructure/ # External integrations
└── presentation/ # HTTP controllers and routes
```
