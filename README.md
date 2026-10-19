# Playwright E2E Automation Framework — TypeScript

A hands-on end-to-end (E2E) test automation project built with **Playwright and TypeScript**, using the Page Object Model (POM) to create reusable, maintainable, and easy-to-understand browser automation tests.

This project demonstrates a complete shopping workflow, including authentication, product selection, cart operations, and order placement. It also showcases reusable page classes, externalized test data, environment-based credentials, and Playwright project dependencies.

## Tech Stack

- **Playwright Test** — Browser automation and assertions
- **TypeScript** — Strongly typed test development
- **Node.js** — Runtime for executing automation tests
- **dotenv** — Environment variable management
- **Git & GitHub** — Version control
- **VS Code** — Development environment

## What This Project Demonstrates

### 1. End-to-End UI Automation

The project automates a complete shopping journey:

1. Authenticate a user and save the browser storage state.
2. Navigate to the products page.
3. Find a product by its name and add it to the cart.
4. Navigate to the cart and select the corresponding product.
5. Click **Buy Now** to proceed to checkout.
6. Select a country on the payments page.
7. Place the order and verify the success message.

### 2. Page Object Model (POM)

Each page has a dedicated class that encapsulates its locators, actions, and validations.

Current page classes:

- **LoginPage** — Navigates to the login page and authenticates the user.
- **ProductsPage** — Navigates to the products page, selects a product, and adds it to the cart.
- **CartPage** — Navigates to the cart and proceeds to checkout for the selected product.
- **PaymentsPage** — Selects the country, places the order, and verifies successful completion.

This approach separates page-specific implementation from test logic, making the framework easier to maintain and extend.

### 3. Reusable Test Data

Test data is maintained separately from page classes and test logic.

- `login-data.ts` — Login-related data and application URLs.
- `product-data.ts` — Product selection, application URLs, and order details.

This separation helps reduce hard-coded values in test cases and makes scenarios easier to update.

### 4. Authentication and Storage State

The project uses a dedicated Playwright setup test to authenticate the user and save the browser context's storage state.

The setup process:

- Navigates to the login page.
- Reads credentials from environment variables.
- Performs login using the `LoginPage` class.
- Verifies successful login.
- Saves the authenticated browser state to `.auth/user.json`.

The Chromium test project depends on the setup project and uses the saved storage state, allowing tests to start with an authenticated session rather than repeating the UI login flow.

### 5. Environment Variables

The project uses a `.env` file to manage sensitive configuration values, such as login credentials.

Example:

```dotenv
USER_USERNAME=your_username
USER_PASSWORD=your_password
```

The `dotenv` package loads these values into `process.env`, where the setup test can access them.

**Security:** The `.env` file and authentication state files should be excluded from Git using `.gitignore`. Never commit real credentials or session cookies to a public repository.

### 6. Playwright Configuration

The `playwright.config.ts` file centralizes test execution settings, including:

- Test directory and project configuration
- Global test timeout
- Assertion timeout
- Action timeout
- HTML reporting
- Retry behavior in CI
- Worker configuration in CI
- Trace collection on the first retry
- Setup project dependencies
- Chromium browser configuration

These settings help standardize test execution locally and in continuous integration environments.

### 7. Assertions and Synchronization

The framework uses Playwright's `expect` assertions to validate application behavior, including:

- Successful login
- Product and cart interactions
- Visibility of page elements
- Checkout readiness
- Successful order placement

Condition-based assertions allow Playwright to wait for expected UI states instead of relying on arbitrary fixed delays.

## Project Structure

```text
POM-advance/
├── .auth/
│   └── user.json
├── .github/
├── data/
│   ├── login-data.ts
│   └── product-data.ts
├── pages/
│   ├── cartpage.ts
│   ├── loginPage.ts
│   ├── paymentsPage.ts
│   └── ProductsPage.ts
├── tests/
│   ├── auth.setup.ts
│   └── product-tests.spec.ts
├── playwright-report/
├── test-results/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

*Note: Generated report and test-result folders, along with local authentication state, should generally not be committed to source control.*

## Getting Started

### Prerequisites

Install:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd POM-advance
```

Replace the placeholder with your GitHub repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Configure environment variables

Create a `.env` file in the project root and configure the credentials expected by `auth.setup.ts`.

```dotenv
USER_USERNAME=your_username
USER_PASSWORD=your_password
```

Ensure that the `.env` path in `playwright.config.ts` points to this root-level file.

### 5. Run the tests

Run the complete test suite:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run only the shopping workflow:

```bash
npx playwright test tests/product-tests.spec.ts
```

View the HTML report:

```bash
npx playwright show-report
```

The setup project is configured as a dependency of the Chromium project, so Playwright runs the authentication setup before executing the dependent tests.

## Design Principles

This project focuses on practical automation engineering principles:

- Separation of test logic, page interactions, and test data
- Reusable Page Object classes
- Environment-based configuration and credentials
- Authentication reuse through storage state
- Explicit synchronization and assertions
- Centralized test execution settings
- Readable and maintainable end-to-end scenarios

## Future Enhancements

Potential improvements as the project evolves:

- Custom Playwright fixtures for dependency injection
- API-assisted test data setup and cleanup
- Multiple user roles and authentication states
- GitHub Actions CI/CD integration
- Parallel execution and test isolation
- Enhanced reporting and failure diagnostics
- Expanded negative and edge-case scenarios

## About

This project is part of my hands-on automation engineering portfolio, with a focus on building maintainable and scalable Playwright test automation.

The goal is not just to automate a user journey, but to demonstrate **Page Object Model design, TypeScript, authentication management, asynchronous programming, synchronization, and reliable end-to-end testing practices**.

