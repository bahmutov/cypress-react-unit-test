;(function() {
  import React from 'react'
  import { mount } from 'cypress-react-unit-test'

  describe('Concatenated 1', () => {
    const Hello = () => <div>First</div>
    it('renders', () => {
      mount(<Hello />)
      cy.contains('First').should('be.visible')
    })
  })
})()
