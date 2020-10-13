/// <reference types="Cypress" />

const { Given, Then } = require('cypress-cucumber-preprocessor/steps')
const { mount } = require('cypress-react-unit-test')
const React = require('react')

const App = () => <div className="App">Hello from App</div>

Given('component is mounted', () => {
  mount(<App />)
})

Then('has text', () => {
  cy.contains('.App', 'Hello from App').should('be.visible')
})
