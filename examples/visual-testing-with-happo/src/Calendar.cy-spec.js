/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Calendar from './Calendar'

describe('Calendar heatmap', () => {
  it('random data', () => {
    mount(<Calendar />)
    cy.get('.react-calendar-heatmap').happoScreenshot({
      component: 'Calendar',
      variant: 'random',
    })

    cy.log('Check tooltip')
    // first there should be not toolip
    cy.get('[data-id=tooltip]').should('not.be.visible')

    // select a day using part of the attribute "data-tip"
    // full attribute: data-tip="2019-12-29 has count: 4"
    cy.get('[data-tip^="2019-12-29"]').click()
    cy.get('[data-id=tooltip]').happoScreenshot({
      component: 'Tooltip',
      variant: 'random',
    })
  })
})
