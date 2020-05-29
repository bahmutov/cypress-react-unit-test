/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import PositiveCounter from './PositiveCounter'

describe('PositiveCounter', () => {
  it('should render counts', () => {
    mount(<PositiveCounter />)
    cy.get('.increment')
      .click()
      .click()
      .click()
    // make sure the component updates
    cy.contains('Value: 3')
      // previous command yields jQuery element
      // I would like to get its outer HTML which
      // we can do via $el[0].outerHTML shorthand
      .its('0.outerHTML')
      .toMatchSnapshot()

    cy.get('.increment')
      .click()
      .click()

    cy.contains('Value: 5')
      .its('0.outerHTML')
      .toMatchSnapshot()
  })

  it('should not go negative', () => {
    mount(<PositiveCounter />)
    cy.get('.increment').click()
    cy.get('.decrement')
      .click()
      .click()
    cy.contains('Value: 0')
      .its('0.outerHTML')
      .toMatchSnapshot()
  })
})
