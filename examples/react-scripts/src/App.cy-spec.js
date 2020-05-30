/// <reference types="cypress" />
// compare to App.test.js
import React from 'react'
import App from './App'
import { mount } from 'cypress-react-unit-test'
import * as calc from './calc'

describe('App', () => {
  it('renders learn react link', () => {
    mount(<App />)
    cy.contains(/Learn React/)
  })

  it('controls the random number by stubbing named import', () => {
    // we are stubbing "getRandomNumber" exported by "calc.js"
    // and imported into "App.js" and called.
    cy.stub(calc, 'getRandomNumber').returns(777)
    mount(<App />)
    cy.contains('.random', '777')
  })
})
