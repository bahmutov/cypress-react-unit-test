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
- Add modules specified in cypress.json
  (These should be in UMD format if you're inlining them as scripts)
*/
before(() => {
  cy.modules = {}
  let modules = Cypress.config('modules')
  cy.log('Loading modules', modules)
  cy.readFile('node_modules/react/umd/react.development.js', { log: false })
    .then(file => cy.modules.React = file)
  cy.readFile('node_modules/react-dom/umd/react-dom.development.js', { log: false })
    .then(file => cy.modules.ReactDOM = file)
  console.warn('UMD Modules Loaded')
})