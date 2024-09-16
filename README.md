# GitHub Homepage Test Automation Evaluation - Degreed

This repository contains automated tests for the GitHub homepage using Cypress and TypeScript for Evaluation. It covers basic UI testing, API testing, mocking, visual regression, and more.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- npm or yarn package manager

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/vishalanand1405/cypress-auto.git

## Repository Setup

## Create a new GitHub repository named "cypress-auto".

### Project Structure
<img width="771" alt="Screenshot 2024-09-16 at 1 03 51 PM" src="https://github.com/user-attachments/assets/be495da6-d7c6-4b28-8be0-57d3a3fe2b28">



## Install Cypress and TypeScript as dev dependencies:
``` bash ```
```
 npm install cypress typescript --save-dev
```

## 1) Create a tsconfig.json file in the root directory with the following configuration:
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "paths": {
      "@fixtures/*": ["cypress/fixtures/*"],
      "@support/*": ["cypress/support/*"]
    },
    "esModuleInterop": true
  },
  "include": ["cypress/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 2) Navigate to the project directory and install dependencies:
```
bash
```
```
cd github-homepage-automation
```
```
npm install
```

## 3) Run the tests:
```
bash
```
```
npm run cypress:open   # To open Cypress test runner
npm run cypress:run    # To run tests headlessly
```

## Test Scenarios
### 1) Homepage UI Tests:
```
Check if the GitHub logo is visible.
Verify the "Sign up" button is functional.
Test navigation links like "Enterprise" and "Pricing" redirect correctly.
```

### 2) API Testing:
```
Fetch public repositories using GitHub's API.
```
:::::::Optional Advance Feature Automation ::::::: 

### 3) Data-Driven Tests:

```Use fixture data to test homepage for different states.```

### 4) Mocking API Responses:

```Simulate various API responses (e.g., success, failure).```

### 5) Visual Regression Testing:

``` Snapshot comparison for key elements of the homepage.```
### 6) Custom Cypress Commands:

```Reduce code duplication with custom commands.```



# Mentoring Notes:

```As a technical leader, one of your key responsibilities is to guide junior engineers while encouraging them to solve problems independently. Here’s how you can mentor a less experienced engineer on this project.
```

## Repository Setup Mentorship
### Repository Structure:
<img width="771" alt="Screenshot 2024-09-16 at 1 03 51 PM" src="https://github.com/user-attachments/assets/be495da6-d7c6-4b28-8be0-57d3a3fe2b28">

```Explain why it's important to organize the project in a clear, modular way.
Encourage the engineer to explore the cypress/integration folder where the main test files reside and explain the purpose of fixtures and support folders for test data and reusable commands.
```
### TypeScript Configuration:

```
Help them understand the importance of TypeScript in enforcing type safety. Let them set up the tsconfig.json themselves and offer guidance if they get stuck. Instead of giving the solution, ask questions like, “What error are you seeing, and what does it tell you about the TypeScript setup?”
```
### Initial Setup:

```
When they encounter issues while installing dependencies or running the tests, encourage them to use online resources and documentation. For example, if they see an error while installing Cypress, ask, “Have you checked the official Cypress documentation or StackOverflow for a solution?”
```
## Test Automation Mentorship
### Test Case Design:

```
After they write initial test cases, review their code and provide constructive feedback. For instance, if they hardcode values, encourage them to use fixture data by asking, “How could we make this test reusable for different scenarios?”
```
### Custom Commands:
```
Show how custom commands can reduce code duplication and improve readability. Ask them, “Can you think of a test step that gets repeated across multiple tests, and how could we refactor that?”
```
### Mocking:
```
If they struggle with mocking API responses, point them to Cypress documentation on cy.intercept(). Ask, “How can we simulate a slow API response, and why is this useful in testing?”
```

## Handling Bottlenecks and Conflict
### Prioritization:

```
If they get overwhelmed with multiple tasks (UI, API testing, CI setup), guide them to prioritize by saying, “Which test is critical for the core functionality of the homepage? Let's focus on that first.”
```

### Conflict Resolution:
```
In case of disagreements on test implementation approaches, foster healthy debate by asking, “What are the pros and cons of each approach? Can we agree on a solution that balances readability, maintainbility and performance and both the parties agree to it? By chance , if the junior or engineers are not able to resolve it themselves ,i should suggest way to go based on my experiences and need”
```
### Continuous Integration Setup
### GitHub Actions:
```
Walk them through setting up a GitHub Actions workflow. Explain why CI is important for running tests automatically.
Let them attempt setting it up and provide feedback after their initial attempt.
```

## Best Practices
### Modular Test Organization:
```
Explain the rationale behind keeping tests modular and maintainable.
Suggest using folders like integration, support, and fixtures to separate concerns.
Talk about Automation Framework approaches like Data driven, Page Object, BDD, TDD etc and make sure he understands the need of each framework and how and what to implement for a p
particular project scenario.
```
Secure Handling of Secrets:
Teach them how to store sensitive data securely using .env files or GitHub Actions secrets. Reinforce this by saying, “Storing API keys directly in your code can lead to security vulnerabilities—how can we prevent this?”
