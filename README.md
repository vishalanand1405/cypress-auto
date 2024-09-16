Repository Setup
Create a new GitHub repository named "cypress-github-homepage-tests".
Initialize the repository with a README.md file that includes:
Setup and run instructions
Mentoring notes for a junior engineer on your team
Install Cypress and TypeScript as dev dependencies:
bash
npm install cypress typescript --save-dev

Create a tsconfig.json file in the root directory with the following configuration:

{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}

Create a cypress folder in the root directory and run the Cypress setup command:

npx cypress open
