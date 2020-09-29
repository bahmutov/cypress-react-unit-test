// @ts-check
import * as React from 'react'
import RouterPage from '../../pages/router'
import { createRouter } from 'next/router'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { mount } from 'cypress-react-unit-test'

describe('Component with router usage', () => {
  it('renders the component that uses next.js router context', () => {
    const router = createRouter('/testPath', {}, '/testPath', {
      subscription: cy.stub(),
      initialProps: {},
      App: cy.stub(),
      Component: cy.stub(),
      pageLoader: cy.stub(),
      initialStyleSheets: [],
      wrapApp: cy.stub(),
      isFallback: false,
    })

    mount(
      <RouterContext.Provider value={router}>
        <RouterPage />
      </RouterContext.Provider>,
    )

    cy.contains('Next.js route /testPath')
  })

  it('renders the component that uses next.js with parsed query', () => {
    const router = createRouter(
      '/testPath',
      { param1: 'param1' },
      '/asTestPath',
      {
        subscription: cy.stub(),
        initialProps: { kek: true },
        App: cy.stub(),
        Component: cy.stub(),
        pageLoader: cy.stub(),
        initialStyleSheets: [],
        wrapApp: cy.stub(),
        isFallback: false,
      },
    )

    mount(
      <RouterContext.Provider value={router}>
        <RouterPage />
      </RouterContext.Provider>,
    )

    cy.contains('My query: {"param1":"param1"}')
  })
})
