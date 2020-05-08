/// <reference types="cypress" />
// compare to App.test.js
import React from 'react'
import App from '../../src/App'
import { mount } from 'cypress-react-unit-test'

const TestDiv = () => <div>JSX</div>

describe('App', () => {
  it('renders learn react link', () => {
    expect(1).to.equal(1)
    // mount(<App />)
    // cy.contains(/Learn React/)
  })
})
