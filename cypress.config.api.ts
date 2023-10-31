import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    retries: 1,
    pageLoadTimeout: 5000,
    baseUrl: 'https://jsonplaceholder.typicode.com',
    specPattern: 'cypress/e2e/api/**/*.spec.{js,jsx,ts,tsx}',
  },
});