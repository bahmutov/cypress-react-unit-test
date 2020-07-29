import React from 'react'
import RemotePizza from './RemotePizza'
import { mount } from 'cypress-react-unit-test'
// prepare for import mocking
import * as services from './services'

const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples']

describe('RemotePizza', () => {
  it('download ingredients from internets (network mock)', () => {
    cy.server()
    cy.route('https://httpbin.org/anything*', { args: { ingredients } }).as(
      'pizza',
    )

    mount(<RemotePizza />)
    cy.contains('button', /cook/i).click()
    cy.wait('@pizza') // make sure the network stub was used

    for (const ingredient of ingredients) {
      cy.contains(ingredient)
    }
  })

  it('stubs via prop (di)', () => {
    const fetchIngredients = cy.stub().resolves({ args: { ingredients } })
    mount(<RemotePizza fetchIngredients={fetchIngredients} />)
    cy.contains('button', /cook/i).click()

    for (const ingredient of ingredients) {
      cy.contains(ingredient)
    }
  })

  // verify the module plugin is inserted correctly
  it.skip('mocks named import from services', () => {
    cy.stub(services, 'fetchIngredients').resolves({ args: { ingredients } })
    mount(<RemotePizza />)
    cy.contains('button', /cook/i).click()

    for (const ingredient of ingredients) {
      cy.contains(ingredient)
    }
  })
})
