# cypress-react-unit-test [![Build Status](https://travis-ci.org/bahmutov/cypress-react-unit-test.svg?branch=master)](https://travis-ci.org/bahmutov/cypress-react-unit-test) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://dashboard.cypress.io/#/projects/z9dxah)

> Unit test React components using Cypress **ALPHA**

## Known problems

- [ ] some DOM events are not working when running all tests at once [#4](https://github.com/bahmutov/cypress-react-unit-test/issues/4)
- [ ] cannot mock server XHR for injected components [#5](https://github.com/bahmutov/cypress-react-unit-test/issues/5)
- [ ] cannot spy on `window.alert` [#6](https://github.com/bahmutov/cypress-react-unit-test/issues/6)

## Use

```js
// import the component you want to test
import { HelloState } from '../../src/hello-x.jsx'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
describe('HelloState component', () => {
  it('works', () => {
    // mount the component under test
    mount(<HelloState />)
    // start testing!
    cy.contains('Hello Spider-man!')
    // mounted component is returned from Cypress.component()
    Cypress.component().invoke('setState', {name: 'React'})
    Cypress.component().its('state').should('deep.equal', {
      name: 'React'
    })
    // check if GUI has rerendered
    cy.contains('Hello React!')
  })
})
```

![Unit testing React components](images/demo.png)

## Examples

All components are in [src](src) folder. All tests are in [cypress/integration](cypress/integration) folder.

* [hello-world-spec.js](cypress/integration/hello-world-spec.js) - testing the simplest React component from [hello-world.jsx](src/hello-world.jsx)
* [hello-x-spec.js](cypress/integration/hello-x-spec.js) - testing React component with props and state [hello-x.jsx](src/hello-x.jsx)
* [counter-spec.js](cypress/integration/counter-spec.js) clicks on the component and confirms the result
* [stateless-spec.js](cypress/integration/stateless-spec.js) shows testing a stateless component from [stateless.jsx](src/stateless.jsx)
* [transpiled-spec.js](cypress/integration/stateless-spec.js) shows testing a component with class properties syntax from [transpiled.jsx](src/stateless.jsx)

## Large examples

* [bahmutov/calculator](https://github.com/bahmutov/calculator) tests multiple components: calculator App, Button, Display.

## Related tools

Same feature for unit testing components from other framesworks using Cypress

* [cypress-vue-unit-test](https://github.com/bahmutov/cypress-vue-unit-test) for Vue.js
* [cypress-hyperapp-unit-test](https://github.com/bahmutov/cypress-hyperapp-unit-test) for Hyperapp
