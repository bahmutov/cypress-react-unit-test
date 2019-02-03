// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

/*
Before All
- Cache CDN resource links
- Load and cache "modules" specified in cypress.json
  (These should be in UMD format if you're inlining them as scripts)
*/

before(() => {
  Cypress.cdns = {}
  Cypress.modules = {}
  cy
    .log('Setting up CDN references and UMD modules')
    .fixture('scripts')
    .then((scripts = {}) => {
      const { cdns, modules } = scripts
      Object.keys(cdns).forEach(key => {
        cy.log(`Referencing ${key} via ${cdns[key]}`)
        Cypress.cdns[key] = cdns[key]
      })
      Object.keys(modules).forEach(key => {
        cy.log(`Loading ${key}`)
          .readFile(modules[key], { log: false })
          .then(file => Cypress.modules[key] = file)
      })
    })
})