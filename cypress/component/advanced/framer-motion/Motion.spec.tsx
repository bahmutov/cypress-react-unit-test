import * as React from 'react'
import { Motion } from './Motion'
import { mount } from 'cypress-react-unit-test'

describe('framer-motion', () => {
  it('Renders component and retries the animation', () => {
    mount(<Motion />)

    cy.get("[data-testid='motion']").should('have.css', 'border-radius', '50%')
    cy.get("[data-testid='motion']").should('have.css', 'border-radius', '20%')
  })

  it('Mocks setTimeout and requestAnimationFrame', () => {
    cy.clock()
    mount(<Motion />)

    cy.tick(800)
    cy.get("[data-testid='motion']").should(
      'have.css',
      'transform',
      'matrix(-1.72504, -1.01205, 1.01205, -1.72504, 0, 0)',
    )

    cy.tick(100)
    cy.get("[data-testid='motion']").should(
      'have.css',
      'transform',
      'matrix(-0.551834, -1.92236, 1.92236, -0.551834, 0, 0)',
    )
  })
})
