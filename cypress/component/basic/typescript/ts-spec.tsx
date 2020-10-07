import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Button } from './Button'

describe('Component spec in typescript', () => {
  it('works', () => {
    mount(<Button>Button Label</Button>)
    cy.contains('button', 'Button Label').should('be.visible')
  })

  it('calls passed on click prop', () => {
    mount(<Button onClick={cy.stub().as('click')}>Click Me</Button>)
    cy.contains('button', 'Click Me').click()
    cy.get('@click').should('have.been.calledOnce')
  })
})
