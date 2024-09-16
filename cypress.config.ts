// import { defineConfig } from "cypress";

// export default defineConfig({
  
//   viewportWidth: 1280,
//   viewportHeight: 720,

//   env: {
//     API_BASE_URL: "https://api.github.com",
//   },

//   e2e: {
    
//       baseUrl: 'https://github.com',
//     },
//   },
// );

// import { defineConfig } from 'cypress'

// export default defineConfig({
//   viewportWidth: 1280,
//   viewportHeight: 720,
//   env: {
//         API_BASE_URL: "https://api.github.com",
//       },
//   e2e: {
    
//     baseUrl: 'https://github.com'
//   },
// })


const { defineConfig } = require('cypress')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on, config)
    },
    baseUrl: 'https://github.com'
  },
    env: {
        API_BASE_URL: "https://api.github.com",
      },
})


